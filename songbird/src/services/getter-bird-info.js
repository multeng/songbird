export default class GetterBirdInfo {
  _proxy = "https://cors-anywhere.herokuapp.com/";
  _apiUrl = "https://www.xeno-canto.org/api/2/recordings?query=";

  async getResource(url) {
    const res = await fetch(`${this._proxy}${this._apiUrl}${url}&q:A`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
    return await res.json();
  }

  async getSixBirds(url) {
    const dataBirds = await this.getResource(url);
    const dataBirdsFiltred = [];
    console.log(dataBirds.recordings);
    dataBirds.recordings.forEach((element) => {
      if (dataBirdsFiltred.length === 6) {
        return dataBirdsFiltred;
      }
      if (!this.checkBirdInData(dataBirdsFiltred, element)) {
        dataBirdsFiltred.push(element);
      }
      console.log(dataBirdsFiltred);
    });
  }

  checkBirdInData(array, bird) {
    for (let index = 0; index < array.length; index++) {
      if (array[index].sp === bird.sp) {
        return true;
      }
    }
    return false;
  }
}
