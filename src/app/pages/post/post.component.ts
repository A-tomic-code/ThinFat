import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  id: string | null = null

  constructor(
    private router: Router,
    private route: ActivatedRoute
  )
  { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
