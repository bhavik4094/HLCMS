import Butter from 'buttercms';

export let butterCMS;

try {
  const butterCmsPreview = !(process.env.VITE_BUTTERCMS_API_PREVIEW === "false" || process.env.VITE_BUTTERCMS_API_PREVIEW === "0")
  
  butterCMS = Butter(process.env.VITE_BUTTERCMS_API_KEY, butterCmsPreview);
} catch (error) {
  console.error(error)
}


