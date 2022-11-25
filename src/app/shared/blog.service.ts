import { Injectable } from '@angular/core';
import { collectionData, doc, docData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Post } from '../models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private firestore: Firestore) { }

  post(post:Post){
    const postRef = collection(this.firestore, 'posts');
    return addDoc(postRef, JSON.parse( JSON.stringify(post) ));
  }

  getOne(id:string){
    const postRef = doc(this.firestore, `posts/${id}`) ;
    return docData(postRef, {idField: id})
  }

  getAll(): Observable<Post[]>{
    const postRef = collection(this.firestore, 'posts');
    return collectionData(postRef,{idField:'id'}) as Observable<Post[]>
  }
}
