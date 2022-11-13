import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private firestore: Firestore) { }

  post(post:Post){
    const postRef = collection(this.firestore, 'posts');
    return addDoc(postRef, JSON.parse( JSON.stringify(post) ));
  }

  getAll(): Observable<Post[]>{
    const postRef = collection(this.firestore, 'posts');
    return collectionData(postRef,{idField:'id'}) as Observable<Post[]>
  }
}
