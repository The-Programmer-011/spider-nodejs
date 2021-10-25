import { spiderStart } from "../services/spider.service";

export default class SpiderController {
    constructor(){}

    search = async (req, res) => {
        try {
          const { search, limit } = req.params
          spiderStart(search, limit);
          console.log("Spider finalizado");
          return res.status(200).json({msg: "Spider em execução", search});
        } catch (e) {
          console.log("Spider, error. ", e);
          throw e;
        }
      };
}