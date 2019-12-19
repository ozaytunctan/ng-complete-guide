
export interface SharedService  {

    /**
     * 
     * @param key 
     * @param value 
     */
    put(key:string,value:any);

    /**
     * 
     * @param key 
     * @param value 
     * @param expireTime 
     */
    put(key:string,value:any, expireTime:number);

    /**
     * 
     * @param key 
     */

    get(key:string);

    /**
     * 
     * @param key 
     */
    remove(key:string);

}