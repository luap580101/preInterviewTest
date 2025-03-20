import axios from "axios";

const API_URL = "https://itunes.apple.com/tw/rss";
const LOOKUP_URL = "https://itunes.apple.com/tw/lookup?id=";

class AppService {
  // 獲取免費應用列表，支持每10個記錄一頁
  getFreeApplications(page: number = 1) {
    const limit = 10;
    const offset = (page - 1) * limit;
    return axios.get(
      `${API_URL}/topfreeapplications/limit=${limit + offset}/json`
    );
  }

  // 獲取推薦應用列表
  getTopGrossingApplications() {
    return axios.get(`${API_URL}/topgrossingapplications/limit=10/json`);
  }

  // 根據應用 ID 查詢應用的詳細信息
  getAppDetails(appId: string) {
    return axios.get(`${LOOKUP_URL}${appId}`);
  }

  // 應用搜尋，根據關鍵字搜尋應用，搜尋結果會顯示在應用列表及應用推薦組件中
  searchApplications(query: string) {
    return axios.get(
      `${API_URL}/search?term=${query}&limit=100&media=software`
    );
  }

  // 解析搜尋結果並過濾出包含關鍵字的應用
  filterApplications(feed: any[], query: string) {
    return feed.filter((entry) => {
      const name = entry["im:name"]?.label || "";
      const summary = entry["summary"]?.label || "";
      const title = entry["title"]?.label || "";
      return (
        name.includes(query) || summary.includes(query) || title.includes(query)
      );
    });
  }

  // 應用圖案圓形樣式
  getCircleImageStyle() {
    return { borderRadius: "50%", width: "100px", height: "100px" };
  }

  // 應用圖案方形角樣式
  getSquareImageStyle() {
    return { borderRadius: "10px", width: "100px", height: "100px" };
  }
}

export default new AppService();
