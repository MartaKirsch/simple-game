export const createArrays = (n) => {
  let d=new Array(n);
  let p=new Array(n);
  const straight=1;
  const cross=1.4;

  for(let i=0;i<n*n;i++)
  {
    d[i]=new Array(n);
    p[i]=new Array(n);
    for(let j=0;j<n*n;j++)
    {
      if(i===j)
      {
        d[i][j]=0;
        p[i][j]=0;
      }
      else
      {
        d[i][j]=900;
        p[i][j]=900;
      }
    }
  }

  //each field
  for(let i=0;i<n*n;i++)
  {
    if(i===0) //top left
    {
      d[i][i+1]=straight;
      d[i][i+n]=straight;
      d[i][i+n+1]=cross;

      //console.log(i,'top left');

      p[i][i+1]=i+1;
      p[i][i+n]=i+1;
      p[i][i+n+1]=i+1;
    }
    else if(i===n-1) //top right
    {
      d[i][i-1]=straight;
      d[i][i+n-1]=cross;
      d[i][i+n]=straight;
      //console.log(i,'top right');

      p[i][i-1]=i+1;
      p[i][i+n-1]=i+1;
      p[i][i+n]=i+1;
    }
    else if(i===((n-1)*n)) //bottom left
    {
      d[i][i-n]=straight;
      d[i][i+1]=straight;
      d[i][i-n+1]=cross;
      //console.log(i,'bottom left');

      p[i][i-n]=i+1;
      p[i][i+1]=i+1;
      p[i][i-n+1]=i+1;
    }
    else if(i===((n*n)-1)) //bottom right
    {
      d[i][i-1]=straight;
      d[i][i-n]=straight;
      d[i][i-n-1]=cross;
      //console.log(i,'bottom right');

      p[i][i-1]=i+1;
      p[i][i-n]=i+1;
      p[i][i-n-1]=i+1;
    }
    else if(i>0 && i<n-1) //border top
    {
      d[i][i-1]=straight;
      d[i][i+1]=straight;
      d[i][i+n]=straight;
      d[i][i+n-1]=cross;
      d[i][i+n+1]=cross;
      //console.log(i,'border top');

      p[i][i-1]=i+1;
      p[i][i+1]=i+1;
      p[i][i+n]=i+1;
      p[i][i+n-1]=i+1;
      p[i][i+n+1]=i+1;
    }
    else if(i>((n-1)*n) && i<((n*n)-1)) //border bottom
    {
      d[i][i-1]=straight;
      d[i][i+1]=straight;
      d[i][i-n]=straight;
      d[i][i-n-1]=cross;
      d[i][i-n+1]=cross;
      //console.log(i,'border bottom');

      p[i][i-1]=i+1;
      p[i][i+1]=i+1;
      p[i][i-n]=i+1;
      p[i][i-n-1]=i+1;
      p[i][i-n+1]=i+1;
    }
    else if(i%n===(n-1)) //border right
    {
      d[i][i-n]=straight;
      d[i][i+n]=straight;
      d[i][i-1]=straight;
      d[i][i-n-1]=cross;
      d[i][i+n-1]=cross;
      //console.log(i,'border right');

      p[i][i-n]=i+1;
      p[i][i+n]=i+1;
      p[i][i-1]=i+1;
      p[i][i-n-1]=i+1;
      p[i][i+n-1]=i+1;
    }
    else if(i%n===0) //border left
    {
      d[i][i-n]=straight;
      d[i][i+n]=straight;
      d[i][i+1]=straight;
      d[i][i-n+1]=cross;
      d[i][i+n+1]=cross;
      //console.log(i,'border left');

      p[i][i-n]=i+1;
      p[i][i+n]=i+1;
      p[i][i+1]=i+1;
      p[i][i-n+1]=i+1;
      p[i][i+n+1]=i+1;
    }
    else //middle
    {
      d[i][i-n]=straight;
      d[i][i+n]=straight;
      d[i][i+1]=straight;
      d[i][i-1]=straight;
      d[i][i-n+1]=cross;
      d[i][i+n+1]=cross;
      d[i][i+n-1]=cross;
      d[i][i-n-1]=cross;

      p[i][i-n]=i+1;
      p[i][i+n]=i+1;
      p[i][i+1]=i+1;
      p[i][i-1]=i+1;
      p[i][i-n+1]=i+1;
      p[i][i+n+1]=i+1;
      p[i][i+n-1]=i+1;
      p[i][i-n-1]=i+1;
      //console.log(i,'middle');
    }
  }

  return [d,p];
};
