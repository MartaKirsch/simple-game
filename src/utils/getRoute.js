export const getRoute = (current, target, p) => {
  let a = current;
  let b = parseInt(target);
  let route = [b];
  a++;b++;
  while(p[a-1][b-1]!==a && p[a-1][b-1]!==b)
  {
    route.push(p[a-1][b-1]-1);
    b=p[a-1][b-1];
  }

  route.reverse();
  return route;
};
