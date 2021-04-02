export const createRoutes = (d,p) => {

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
