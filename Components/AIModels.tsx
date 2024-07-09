const AIModels = () => {
  return (
    <select
      className="h-[40px] w-[140px] rounded-md bg-[#1F2937] px-4 py-2 text-neutral-200"
    >
      <option value="Perplexity">Perplexity</option>
      <option value="gpt-4">GPT-4</option>
      <option value="Claude">Claude</option>
    </select>
  )
}

export default AIModels