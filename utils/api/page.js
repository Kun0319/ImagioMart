import Http from "@/utils/http";

export class PageApi {
  getMagazinePage() {
    return Http.get(`/issues`);
  }

  getMagazines() {
    return Http.get(`/issues/{:key}`);
  }
}
