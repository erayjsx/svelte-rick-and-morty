import { writable } from "svelte/store";

export const characterStore = writable({
  characters: [],
  loading: false,
  error: null,
});

const API_URL = "https://rick-and-morty-api.jojapi.net/character";
const API_KEY =
  "jk_N5ZRa4eI76a5dap078kDa84Ue9c0wipER5b8C0NnbodK0fV478Ca218f04dVR16u";

async function fetchCharacters() {
  characterStore.update((state) => ({ ...state, loading: true, error: null }));

  try {
    const response = await fetch(API_URL, {
      headers: {
        "X-JoJAPI-Key": API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    characterStore.update((state) => ({
      characters: data,
      loading: false,
      error: null,
    }));
  } catch (error) {
    console.error("Veri çekme hatası:", error);

    characterStore.update((state) => ({
      ...state,
      loading: false,
    }));
  }
}

fetchCharacters();
