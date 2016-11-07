export class SearchDetail {
  docType: Array<string>;
  fromUser: string;
  fromCountry: string;
  toUser: string;
  toCountry: string;
  fromDate: string;
  toData: string;
  name: string;
  country: Array<string>;
  fromYear: string;
  toYear: string;
  mainBusiness: Array<string>;
  revenueRel: Array<number>;
  revenueUnrel: Array<number>;
  totalRevenue: Array<number>;
  taxAccrual: Array<number>;
  taxPaid: Array<number>;
  numOfEmp: Array<number>;
  capital: Array<number>;
  accuEarnings: Array<number>;
  assets: Array<number>;

  constructor(docType, fromUser, fromCountry, toUser, toCountry, fromDate,
    toData, name, country, fromYear, toYear, mainBusiness, revenueRel, revenueUnrel, taxAccrual,
    taxPaid, numOfEmp, capital, accuEarnings, assets) {
    this.docType = docType;
    this.fromUser = fromUser;
    this.fromCountry = fromCountry;
    this.toUser = toUser;
    this.toCountry = toCountry;
    this.fromDate = fromDate;
    this.toData = toData;
    this.name = name;
    this.country = country;
    this.fromYear = fromYear;
    this.toYear = toYear;
    this.mainBusiness = mainBusiness;
    this.revenueRel = revenueRel;
    this.revenueUnrel = revenueUnrel;
    this.taxAccrual = taxAccrual;
    this.taxPaid = taxPaid;
    this.numOfEmp = numOfEmp;
    this.capital = capital;
    this.accuEarnings = accuEarnings;
    this.assets = assets
  }
}
