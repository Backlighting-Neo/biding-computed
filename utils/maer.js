const cut = (arr, num) => arr.slice(num, -num);

function score(pi, lamda1, lamda2){
  const pricesCount = pi.length;
  var sortPrice = pi.sort((a, b) => b - a);
  var lengthTobeCut = 0;
  
  if (pricesCount <= 5) lengthTobeCut = 0;
  else if(pricesCount > 5 && pricesCount <= 20) lengthTobeCut = 1;
  else if(pricesCount > 20 && pricesCount <= 40) lengthTobeCut = 2;
  else lengthTobeCut = 3;

  var cutArr = cut(sortPrice, lengthTobeCut);  // 去掉lengthTobeCut个最高最低出价
  var ceilArr = cutArr.slice((cutArr.length / 2) | 0, cutArr.length);  // 取出价较便宜的那一半
  var pv = ceilArr.reduce((total, currentValue) => total + currentValue, 0) / ceilArr.length;  // 标准出价
  var scores = sortPrice.map(element => 100 - Math.abs(element - pv) / pv / (element > pv ? lamda1 : lamda2));  // 得分

  return ({ pv, sortPrice, scores})
}

// Testing Code
// const sample = [5219117.00, 6508509.30, 7699112.50, 6499056.00, 7617973.15, 6357448.70, 5477839.00, 6029472.75, 7725558.50, 4267319.50, 4491940.50, 4997849.50, 7500116.53, 5253640.00, 5860390.50, 6026244.50, 7735086.12, 6179472.75, 6880716.50, 6612580.00, 8090799.61, 6443565.65, 7296730.52, 6180441.35, 6487694.55];
// console.log(score(sample, 0.015, 0.03));