import { CandidateService } from './../../services/candidate.service';
import { Candidate } from './../../models/candidate.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.scss']
})
export class AddCandidateComponent implements OnInit {

  candidate: Candidate = {
    name: '',
    email: '',
    phone: ''
  };
  submitted = false;

  constructor(private candidateService: CandidateService) { }

  ngOnInit(): void {

  }

  saveCandidate(): void {
    const data = {
      name: this.candidate.name,
      email: this.candidate.email,
      phone: this.candidate.phone
    };

    this.candidateService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newCandidate(): void {
    this.submitted = false;
    this.candidate = {
      name: '',
      email: '',
      phone: ''
    };
  }

}


