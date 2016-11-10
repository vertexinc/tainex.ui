import { Component, OnInit } from '@angular/core';
import { Cbcrtable2 } from './cbcrtable2'

@Component({
  selector: 'tieapp-cbcrtable2',
  templateUrl: './cbcrtable2.component.html',
  styleUrls: ['./cbcrtable2.component.css']
})
export class Cbcrtable2Component implements OnInit {

  private cbcrtable2: Cbcrtable2;
  private cbcrtable2Data = [{
    "taxJurisdiction": "CA",
    "constituentEntities": "GLOBAL SALESCO",
    "taxJurisdictionOfOrganisation": "CA",
    "researchandDevelopment": "0",
    "holdingorManaging": "1",
    "purchaseorProcurement": "0",
    "manufacturingorProduction": "0",
    "salesMarketingorDistribution": "0",
    "administrativeManagement": "1",
    "provisionOfServices": "1",
    "internalGroupFinance": "0",
    "regulatedFinancialServices": "0",
    "insurance": "0",
    "holdingShares": "0",
    "dormant": "1",
    "other": "0"
  },
  {
    "taxJurisdiction": "CN",
    "constituentEntities": "CHINA MANUFACTURING CO",
    "taxJurisdictionOfOrganisation": "CN",
    "researchandDevelopment": "1",
    "holdingorManaging": "0",
    "purchaseorProcurement": "0",
    "manufacturingorProduction": "0",
    "salesMarketingorDistribution": "0",
    "administrativeManagement": "0",
    "provisionOfServices": "0",
    "internalGroupFinance": "0",
    "regulatedFinancialServices": "1",
    "insurance": "0",
    "holdingShares": "0",
    "dormant": "1",
    "other": "0"
  },
  {
    "taxJurisdiction": "DE",
    "constituentEntities": "German HoldCo GmbH",
    "taxJurisdictionOfOrganisation": "DE",
    "researchandDevelopment": "0",
    "holdingorManaging": "0",
    "purchaseorProcurement": "0",
    "manufacturingorProduction": "0",
    "salesMarketingorDistribution": "0",
    "administrativeManagement": "0",
    "provisionOfServices": "0",
    "internalGroupFinance": "0",
    "regulatedFinancialServices": "0",
    "insurance": "1",
    "holdingShares": "0",
    "dormant": "1",
    "other": "1"
  },
  {
    "taxJurisdiction": "DE",
    "constituentEntities": "Germany SubAssembly GmbH",
    "taxJurisdictionOfOrganisation": "DE",
    "researchandDevelopment": "0",
    "holdingorManaging": "1",
    "purchaseorProcurement": "0",
    "manufacturingorProduction": "1",
    "salesMarketingorDistribution": "0",
    "administrativeManagement": "0",
    "provisionOfServices": "1",
    "internalGroupFinance": "0",
    "regulatedFinancialServices": "0",
    "insurance": "0",
    "holdingShares": "0",
    "dormant": "1",
    "other": "0"
  },{
    "taxJurisdiction": "GB",
    "constituentEntities": "FINANCECO, LTD.",
    "taxJurisdictionOfOrganisation": "GB",
    "researchandDevelopment": "0",
    "holdingorManaging": "1",
    "purchaseorProcurement": "0",
    "manufacturingorProduction": "1",
    "salesMarketingorDistribution": "0",
    "administrativeManagement": "0",
    "provisionOfServices": "1",
    "internalGroupFinance": "0",
    "regulatedFinancialServices": "0",
    "insurance": "0",
    "holdingShares": "0",
    "dormant": "1",
    "other": "0"
  },{
    "taxJurisdiction": "HK",
    "constituentEntities": "APAC SALES CORPORATION",
    "taxJurisdictionOfOrganisation": "HK",
    "researchandDevelopment": "0",
    "holdingorManaging": "0",
    "purchaseorProcurement": "0",
    "manufacturingorProduction": "1",
    "salesMarketingorDistribution": "0",
    "administrativeManagement": "0",
    "provisionOfServices": "1",
    "internalGroupFinance": "0",
    "regulatedFinancialServices": "0",
    "insurance": "0",
    "holdingShares": "0",
    "dormant": "1",
    "other": "0"
  },{
    "taxJurisdiction": "IE",
    "constituentEntities": "Irish IPCo, Ltd",
    "taxJurisdictionOfOrganisation": "IE",
    "researchandDevelopment": "0",
    "holdingorManaging": "1",
    "purchaseorProcurement": "0",
    "manufacturingorProduction": "0",
    "salesMarketingorDistribution": "0",
    "administrativeManagement": "0",
    "provisionOfServices": "1",
    "internalGroupFinance": "0",
    "regulatedFinancialServices": "0",
    "insurance": "0",
    "holdingShares": "0",
    "dormant": "1",
    "other": "0"
  }]
  constructor() {
    this.cbcrtable2 = new Cbcrtable2(this.cbcrtable2Data);
  }

  ngOnInit() {
  }

}
