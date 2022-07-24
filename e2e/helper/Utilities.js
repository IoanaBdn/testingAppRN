class Utilities{

    async sleep(miliseconds){
        return new Promise(reseolve => setTimeout(resolve, miliseconds));
    }

}
export default new Utilities();