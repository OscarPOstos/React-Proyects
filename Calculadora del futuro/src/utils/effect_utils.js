

export default async function activateEffect(setState) {
    setState("animated");
    await new Promise(r => setTimeout(r, 500));
    setState("");
}