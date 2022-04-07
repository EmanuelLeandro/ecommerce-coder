import sneakers from './Item';

const getSneakers= () => {
    return  new Promise ((resolve ,reject) =>{
        const ok = true;
         setTimeout (() => {
             if(ok){
                 resolve(sneakers);
             }else{
                 reject('error');
             }
        }, 2000);
    })
}

export default getSneakers;