class HashTable{
    constructor(size=53){
      this.table = new Array(size);
    }
    
    _hash(key){
      let total = 0;
      const primeN = 31;
      for(let i=0; i < Math.min(key.length,100);i++){
        let char = key[i];
        let value = char.charCodeAt(0) - 96; // Convert char to a number
        total = (total * primeN + value) % this.table.length;
      }
      return total;
    }
    
    set(key,value){
      const index = this._hash(key);
      if(!this.table[index]){
        this.table[index] = [];
      }
      this.table[index].push([key,value]);
    }
    
    keys(){
      let a = [];
      for(let b of this.table){
        if(b){
          for(let c of b){
            a.push(c[0])
          }
        }
      }
      return a
    }
    
    values(){
      let b = [];
      for(let e of this.table){
        if(e){
          for(let f of e){
            b.push(f[1])
          }
        }
      }
      return b
    }
    
    get(key){
      let index = this._hash(key);
      let bucket = this.table[index];
      if(bucket){
        for(let pair of bucket){
          if(pair[0]===key){
            return pair[1]
          }
        }
      }
    }
    
  }
  let h = new HashTable();
  h.set("age",25);
  h.set('name','Prakash')
  h.set('occupation','software developer')
  
  console.log(h.keys(),h.values())
  console.log(h.get("age"),h.get("name"),h.get("occupation"))