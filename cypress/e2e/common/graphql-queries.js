export const tenantQuery = `query Tenant {
    tenant {
      id
      name
      countryCode
      language
      currencyPosition
      currency
      tenantSettings {
        key
        type
        value
        __typename
      }
      tenantIdentifiers {
        identifier
        __typename
      }
      __typename
    }
  }`;

export const activePlacesQuery = `query ActivePlaces($areaCode: String!, $countryCode: String!, $priceCategory: String, $timingCategory: String, $timeGrouping: Boolean) {
    activePlaces(
      areaCode: $areaCode
      countryCode: $countryCode
      priceCategory: $priceCategory
      timingCategory: $timingCategory
      timeGrouping: $timeGrouping
    ) {
      overall
      activePlacesOnly
      avgPlaces
      concetrationName
      activePlaces {
        category
        value
        __typename
      }
      __typename
    }
  }`;

export const top20PShareQuery = `query Top20Share($areaCode: String!, $priceCategory: String, $timingCategory: String) {
    top20PShare(
      areaCode: $areaCode
      priceCategory: $priceCategory
      timingCategory: $timingCategory
    ) {
      value
      __typename
    }
  }`;

export const cityGrowthQuery = `query AreaGrowth($areaCode: String!, $priceCategory: String, $timingCategory: String) {
    areaGrowth(
      areaCode: $areaCode
      priceCategory: $priceCategory
      timingCategory: $timingCategory
    ) {
      areaTrending
      areaGrowthYoy
      cityGrowth
      maxAreaGrowthValue
      maxAreaGrowthName
      __typename
    }
  }`;

export const areaRankByAvgBillQuery = `query AreaRankByAvgBill($areaCode: String!, $priceCategory: String, $timingCategory: String) {
    areaRankByAvgBill(
      areaCode: $areaCode
      priceCategory: $priceCategory
      timingCategory: $timingCategory
    ) {
      areaRank
      areasCount
      __typename
    }
  }`;

export const weeklySpendQuery = `query WeeklySpend($areaCode: String!, $priceCategory: String, $timingCategory: String) {
    weeklySpend(
      areaCode: $areaCode
      priceCategory: $priceCategory
      timingCategory: $timingCategory
    ) {
      values
      __typename
    }
  }`;

export const kpiSectionQuery = `query KpiSection($areaCode: String!, $priceCategory: String, $timingCategory: String) {
    areaGrowth(
      areaCode: $areaCode
      priceCategory: $priceCategory
      timingCategory: $timingCategory
    ) {
      areaTrending
      areaGrowthYoy
      cityGrowth
      maxAreaGrowthValue
      maxAreaGrowthName
      __typename
    }
    top20PShare(
      areaCode: $areaCode
      priceCategory: $priceCategory
      timingCategory: $timingCategory
    ) {
      value
      __typename
    }
    areaRankByAvgBill(
      areaCode: $areaCode
      priceCategory: $priceCategory
      timingCategory: $timingCategory
    ) {
      areaRank
      areasCount
      __typename
    }
    hourlySalesVolume(
      areaCode: $areaCode
      priceCategory: $priceCategory
      timingCategory: $timingCategory
    ) {
      workDays
      nonWorkDays
      __typename
    }
    weeklySpend(
      areaCode: $areaCode
      priceCategory: $priceCategory
      timingCategory: $timingCategory
    ) {
      values
      __typename
    }
    monthlySpendVolume(
      areaCode: $areaCode
      priceCategory: $priceCategory
      timingCategory: $timingCategory
    ) {
      year
      quarter
      value
      __typename
    }
    monthlySos(
      areaCode: $areaCode
      priceCategory: $priceCategory
      timingCategory: $timingCategory
    ) {
      year
      quarter
      value
      __typename
    }
    noPlaces(
      areaCode: $areaCode
      priceCategory: $priceCategory
      timingCategory: $timingCategory
    ) {
      year
      quarter
      value
      __typename
    }
    avgBill(
      areaCode: $areaCode
      priceCategory: $priceCategory
      timingCategory: $timingCategory
    ) {
      currency
      quarterlyData {
        quarter
        value
        year
        __typename
      }
      __typename
    }
  }`;

export const areaQuery = `query Area($countryCode: String!, $filter: String!, $maxResult: Int) {
    area(countryCode: $countryCode, filter: $filter, maxResult: $maxResult) {
      areaCode
      areaName
      city
      parentArea
      __typename
    }
  }`;
