'use strict';

class Model{
    constructor(schema){
        this.schema = schema
    }
    jsonSchema(){
        return typeof this.schema.jsonSchema === 'function' ? this.schema.jsonSchema() : {}
    }
    get(_id){
       let query = _id ? this.schema.findOne({_id}) : this.schema.find({_id}) 
       return Promise.resolve(query)
    }
    create(input){
        let output  = this.schema.create(input)
        return  Promise.resolve(output)
    }
    update(_id,input){
        let output = this.schema.findByIdAndUpdate(_id,input,{new:true})
        return Promise.resolve(output)
    }
    delete(_id){
        let del = this.schema.findAndDelete({_id})
        return Promise.resolve(del)
    }
} 

module.exports = Model