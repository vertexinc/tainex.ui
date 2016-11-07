import { Component, OnInit } from '@angular/core';
import { Cbcrtable1 } from './cbcrtable1';

@Component({
  selector: 'tieapp-cbcrtable1',
  templateUrl: './cbcrtable1.component.html',
  styleUrls: ['./cbcrtable1.component.css']
})
export class Cbcrtable1Component implements OnInit {

  private cbcrtable1 : Cbcrtable1;
  private cbcrtable1Data = [
    {
      "taxJurisdiction":"CA",
      "unrelatedParty":"15867463700",
      "relatedParty":"13132307500",
      "total":"2735156220",
      "profitBeforeIncomeTax":"1195464060",
      "incomeTaxPaid":"247461056",
      "incomeTaxAccrued":"215183520",
      "statedCaptial":"26317704",
      "accumulatedEarnings":"1255227900",
      "numberofEmployees":"51",
      "tangibleAssets":"1691169"
    },
    {
      "taxJurisdiction":"CN",
      "unrelatedParty":"267463700",
      "relatedParty":"13132307500",
      "total":"2735156220",
      "profitBeforeIncomeTax":"1195464060",
      "incomeTaxPaid":"2471056",
      "incomeTaxAccrued":"35183520",
      "statedCaptial":"26317704",
      "accumulatedEarnings":"11255227900",
      "numberofEmployees":"512",
      "tangibleAssets":"16969"
    },
    {
      "taxJurisdiction":"DE",
      "unrelatedParty":"586743700",
      "relatedParty":"13132307500",
      "total":"2735156220",
      "profitBeforeIncomeTax":"1195464060",
      "incomeTaxPaid":"2474616",
      "incomeTaxAccrued":"215183520",
      "statedCaptial":"3326317704",
      "accumulatedEarnings":"255227900",
      "numberofEmployees":"51",
      "tangibleAssets":"691169"
    },
    {
      "taxJurisdiction":"CA",
      "unrelatedParty":"586743700",
      "relatedParty":"1132307500",
      "total":"273515620",
      "profitBeforeIncomeTax":"1195464060",
      "incomeTaxPaid":"112474616",
      "incomeTaxAccrued":"32215183520",
      "statedCaptial":"44213326317704",
      "accumulatedEarnings":"1255227900",
      "numberofEmployees":"151",
      "tangibleAssets":"6921231169"
    },
    {
      "taxJurisdiction":"CA",
      "unrelatedParty":"15867463700",
      "relatedParty":"13132307500",
      "total":"2735156220",
      "profitBeforeIncomeTax":"1195464060",
      "incomeTaxPaid":"247461056",
      "incomeTaxAccrued":"215183520",
      "statedCaptial":"26317704",
      "accumulatedEarnings":"1255227900",
      "numberofEmployees":"51",
      "tangibleAssets":"1691169"
    },
    {
      "taxJurisdiction":"CN",
      "unrelatedParty":"267463700",
      "relatedParty":"13132307500",
      "total":"2735156220",
      "profitBeforeIncomeTax":"1195464060",
      "incomeTaxPaid":"2471056",
      "incomeTaxAccrued":"35183520",
      "statedCaptial":"26317704",
      "accumulatedEarnings":"11255227900",
      "numberofEmployees":"512",
      "tangibleAssets":"16969"
    },
    {
      "taxJurisdiction":"DE",
      "unrelatedParty":"586743700",
      "relatedParty":"13132307500",
      "total":"2735156220",
      "profitBeforeIncomeTax":"1195464060",
      "incomeTaxPaid":"2474616",
      "incomeTaxAccrued":"215183520",
      "statedCaptial":"3326317704",
      "accumulatedEarnings":"255227900",
      "numberofEmployees":"51",
      "tangibleAssets":"691169"
    },
    {
      "taxJurisdiction":"CA",
      "unrelatedParty":"586743700",
      "relatedParty":"1132307500",
      "total":"273515620",
      "profitBeforeIncomeTax":"1195464060",
      "incomeTaxPaid":"112474616",
      "incomeTaxAccrued":"32215183520",
      "statedCaptial":"44213326317704",
      "accumulatedEarnings":"1255227900",
      "numberofEmployees":"151",
      "tangibleAssets":"6921231169"
    }
  ]
  constructor() {
    this.cbcrtable1 = new Cbcrtable1(this.cbcrtable1Data);
  }

  ngOnInit() {
  }

}
