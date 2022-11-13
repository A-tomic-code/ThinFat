export class Post {

    title: string = '';
    description: string = '';
    date: string = '';
    likes: number = 0;
    comments: string[] = [];

    constructor(title: string = '', description: string = '', date: string = '', likes: number = 0) {
        
        this.title = title;
        this.description = description;
        this.date = date;
        this.likes = likes;
    }

}
