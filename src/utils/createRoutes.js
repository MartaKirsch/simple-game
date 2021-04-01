export const createRoutes = () => {
  let d=[
  [0,1,900,1,1.4,900,900,900,900],
  [1,0,1,1.4,1,1.4,900,900,900],
  [900,1,0,900,1.4,1,900,900,900],
  [1,1.4,900,0,1,900,1,1.4,900],
  [1.4,1,1.4,1,0,1,1.4,1,1.4],
  [900,1.4,1,900,1,0,900,1.4,1],
  [900,900,900,1,1.4,900,0,1,900],
  [900,900,900,1.4,1,1.4,1,0,1],
  [900,900,900,900,1.4,1,900,1,0]
  ];

  let p=[
    [0,1,900,1,1,900,900,900,900],
    [2,0,2,2,2,2,900,900,900],
    [900,3,0,900,3,3,900,900,900],
    [4,4,900,0,4,900,4,4,900],
    [5,5,5,5,0,5,5,5,5],
    [900,6,6,900,6,0,900,6,6],
    [900,900,900,7,7,900,0,7,900],
    [900,900,900,8,8,8,8,0,8],
    [900,900,900,900,9,9,900,9,0]
  ];

  for(let i=0;i<d.length;i++)
  {
    const u=i;
    for(let j=0;j<d.length;j++)
    {
      if(i!==j && d[j][i]<900)
      {
        const v=j;
        for(let k=0;k<d.length;k++)
        {
          if(k!==i && k!==j && d[i][k]<900)
          {
            const l = d[v][u] + d[u][k];
            if(l<d[v][k])
            {
              d[v][k]=l;
              p[v][k]=p[u][k];
            }
          }
        }
      }
    }
  }
  return [d,p];
}
