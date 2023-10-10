import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  constructor(private _category:CategoryService, private snackbar:MatSnackBar){}

  category = {
    title:'',
    description:''
  }

  formSubmit(){

    if(this.category.title.trim() == '' || this.category.title == null){
      return this.snackbar.open("Title Required!!","Ok",{
        duration:4000
      });
    }
    this._category.addCategory(this.category).subscribe(
      (data:any)=>{
        Swal.fire("Success","Category added succesfully","success");
        this.category.title = '';
        this.category.description = '';
      },(error)=>{
        console.log(error);
        Swal.fire("Error!!", "An error occured","error")
      }
    )
    return;
  }

}
