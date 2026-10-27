/* Readings are deterministic editorial interpretations, not predictions or AI inference. */
window.TarotReading={
 positions:['当前状况','需要留意的因素','行动建议'],
 build(ids,profile,question=''){
  const positions=this.positions;
  return ids.map((id,i)=>{const c=TAROT_CARDS[id],tips=c.guidance[profile.topic]||c.guidance['整体运势'];
   const depth=TAROT_DEPTH[id];
   let perspective=ids.length===1?`今天可以把这张牌作为反思的切入点：${c.energy}`:[
    `在“当前状况”的位置，${c.name}邀请你从“${c.keywords}”观察眼前处境。${c.energy}这是一种观察角度，不是对事实的断言。`,
    `在“需要留意的因素”的位置，${c.name}提醒你检查是否忽略了“${c.keywords}”。${c.meaning}不要急于把牌面当作他人的真实想法。`,
    `在“行动建议”的位置，${c.name}将关注点带回你能够采取的行动。${c.energy}先做一个可以观察效果的小尝试。`
   ][i];
   perspective+=' '+(ids.length===1?depth[2]:[depth[2],'在这一牌位尤其要留意：'+depth[3],'可以直接尝试：'+depth[5]][i]);
   return{cardId:id,position:ids.length===1?'此刻的指引':positions[i],symbols:c.symbols,meaning:c.meaning,deepTitle:depth[0],deepAnalysis:depth[1],integration:depth[2],blindSpot:depth[3],symbolQuestion:depth[4],symbolAction:depth[5],perspective,guidance:[...tips],reflection:question?`回到你的问题“${question}”：${['这些象征让你想到哪些已经发生的事实？','哪些感受或假设仍需要核实？','你愿意先尝试哪一个小行动？'][i]}`:`关于${profile.topic}，这张牌的哪些象征与你今天的体验产生共鸣？`,message:c.message};
  });
 }
};
