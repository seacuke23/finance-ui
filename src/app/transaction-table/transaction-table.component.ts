import { Component, OnInit } from '@angular/core';
import { TransactionControllerService, TransactionCategoryControllerService, TransactionCategory, Transaction } from 'something';

@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.css']
})
export class TransactionTableComponent implements OnInit {
  transactions: Transaction[]=[];
  categories: TransactionCategory[]=[];

	constructor(private transactionService: TransactionControllerService, private categoryService: TransactionCategoryControllerService) { }
	ngOnInit() {
		this.transactionService.getTransactionUsingGET1(true).subscribe((data)=>{  
      console.log(data);
      this.transactions=data;  
		})  
		this.categoryService.getCategoriesUsingGET().subscribe((data)=>{  
      console.log(data);
      this.categories=data;  
		})  
  }

  public updateCategory(value: String, transaction: Transaction){
    console.log("updating category to '" + value + "' for transaction: " + transaction.detail1);
  }

}
