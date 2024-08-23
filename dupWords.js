const dupWords = string => {
   const strArr = string.split(" ");
   const res = [];
   for(let i = 0; i < strArr.length; i++){
      if(strArr.index(strArr[i]) !== strArr.lastIndex(strArr[i])){
         if(!res.includes(strArr[i])){
            res.push(strArr[i]);
         };
      };
   };
   return res.join(" ");
};