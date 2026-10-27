window.TarotStore=(()=>{
 const key='daily-tarot:v2:history',old='daily-tarot:v1:';
 const localDate=(d=new Date())=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
 const read=k=>{try{return JSON.parse(localStorage.getItem(k))}catch{return null}};
 const valid=r=>r&&r.profile&&Array.isArray(r.cardIds)&&[1,3].includes(r.cardIds.length)&&new Set(r.cardIds).size===r.cardIds.length&&r.cardIds.every(n=>Number.isInteger(n)&&n>=0&&n<22);
 function history(){const saved=read(key);if(Array.isArray(saved))return saved.filter(valid);const records=[];for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(!/^daily-tarot:v1:\d{4}-\d{2}-\d{2}$/.test(k))continue;const r=read(k);if(r){const migrated={...r,id:k,mode:'single',cardIds:[r.cardId],createdAt:r.date+'T12:00:00',question:''};if(valid(migrated))records.push(migrated)}}return records.sort((a,b)=>b.createdAt.localeCompare(a.createdAt)).slice(0,100)}
 function save(record){if(record.date!==localDate())throw Error('日期已变化，请重新开始。');if(!valid(record))throw Error('抽牌记录不完整。');const records=history();const value={...record,id:crypto.randomUUID(),createdAt:new Date().toISOString()};localStorage.setItem(key,JSON.stringify([value,...records].slice(0,100)));return value}
 function setHidden(id,hidden){const records=history().map(r=>r.id===id?{...r,hidden}:r);localStorage.setItem(key,JSON.stringify(records))}
 function remove(id){const records=history().filter(r=>r.id!==id);localStorage.setItem(key,JSON.stringify(records));if(id.startsWith(old))localStorage.removeItem(id)}
 function saveAI(id,ai){const records=history();if(!records.some(r=>r.id===id))return false;localStorage.setItem(key,JSON.stringify(records.map(r=>r.id===id?{...r,ai}:r)));return true}
 return{localDate,history,save,setHidden,remove,saveAI};
})();
