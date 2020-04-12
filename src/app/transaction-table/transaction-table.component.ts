import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.css']
})
export class TransactionTableComponent implements OnInit {
  transactions=[];
	constructor(private transactionService: TransactionService) { }
	ngOnInit() {
		this.transactionService.getUnverified().subscribe((data: any[])=>{  
      console.log(data);
      this.transactions=data;  
		})  
  }

}
