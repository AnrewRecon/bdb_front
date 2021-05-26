import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PersonModel } from 'src/app/model/person.model';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  person: PersonModel = new PersonModel();
  constructor(private service: PersonService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  save() {
    if (this.person.documentId > 0 && this.person.fullname.length > 0) {

      this.service.save(this.person).subscribe(response => {
        if (response.state){
          this.toastr.success(response.message);
          this.router.navigate(["list"]);
        }
        else
          this.toastr.warning(response.message)
      },
        (error) => {
          this.toastr.error("an error occurred while inserting")
        });
    } else {
      this.toastr.warning("Enter all required fields")
    }
  }

  return() {
    this.router.navigate(["list"])
  }
}
