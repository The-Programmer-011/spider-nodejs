import { spiderStart } from "../services/spider.service";

export default class SpiderController {
    constructor(){}

    search = async (req, res) => {
        try {
          const { search } = req.params
          spiderStart(search);
          console.log("Spider finalizado");
          return res.status(200).json({msg: "Rota em funcionamento, pesquisa: ", search});
        } catch (e) {
          console.log("Spider, error. ", e);
          throw e;
        }
      };
}