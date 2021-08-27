export const fetcher = async (url) => {
  const response = await fetch(url);

  // エラー
  if (!response.ok) {
    throw new Error("エラーが発生、データ取得に失敗");
  }

  const json = await response.json();
  return json;
};
