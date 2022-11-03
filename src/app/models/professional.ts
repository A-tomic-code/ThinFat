export class Professional {

    name:string = '';
    description:string = '';
    img:string = '';

    likes:number = 0;

    constructor(name:string = 'noname', description:string = 'nodesc'){
        
        this.name = name;
        this.description = description;

    }

    like(){
        this.likes++;
    }
    
}
