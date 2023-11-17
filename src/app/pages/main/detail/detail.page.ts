import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DatabaseHelperService} from "../../../data/services/database-helper.service";
import {NavController} from "@ionic/angular";
import {Story} from "../../../data/model/Story";
import {Pasta, PastaInstruction} from "../../../data/model/Pasta";
import {ApiFactoryService} from "../../../data/services/api-factory.service";
import {catchError} from "rxjs";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  pastaId?: number | null
  pasta?: Pasta
  step: string = ''
  addParagraph = ""

  constructor(private apiFactory: ApiFactoryService, private route: ActivatedRoute, private navController: NavController, private router: Router, private databaseHelper: DatabaseHelperService) {
    this.pastaId = parseInt(this.route.snapshot.paramMap.get('id') ?? "0")
  }

  ngOnInit() {
    this.apiFactory.getRequest(`api/pasta/${this.pastaId}`).subscribe((data) => {
      this.pasta = data.data
    })
  }

  onSubmitStep() {
    // let formData = new FormData()
    // formData.set('pastas_id',this.pastaId!!.toString() ?? '')
    // formData.set('description',this.addParagraph.toString() ?? '')
    let bodyRequest = new Map<string, any>([
      ['pastas_id', this.pasta?.id],
      ['description', this.addParagraph],
    ])

    //step was auto increment in server
    this.apiFactory.postRequest('api/pastaInstruction/add', bodyRequest).pipe(catchError(err => {
      throw err.message
    })).subscribe((response) => {
      this.apiFactory.getRequest(`api/pasta/${this.pastaId}`).subscribe((data) => {
        this.pasta = data.data
      })
    })
  }

  onBackPressed() {
    this.navController.back()
  }

  navigateToEdit() {
    this.router.navigate([`menu/edit-data/${this.pastaId}`])
  }

  protected readonly Component = Component;
  protected readonly document = document;
}
