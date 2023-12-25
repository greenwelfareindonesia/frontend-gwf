import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import EnvironmentalCard from "./EnvironmentalCard";

function EnvironmentalBenefits() {
  const card = [
    {
      title: "Water Conservation",
      desc: "From taking brisk showers to giving up almonds, it seems like the world has united in search for the most effective way to save water in the face of increasing droughts. Adopting a vegan diet, however, is the most efficient way of saving water, as plant foods require way less water to produce compared to animal products. In fact, agricultural production as a whole accounts for 93% of the world's water supply, with meat and dairy production being the biggest culprit: one quarter of our freshwater is used for this industry alone! On the other hand, research shows that one person going vegan can save over 200,000 gallons of water a year (and you're not supporting factory farms in the process!).",
    },
    {
      title: "Keeping The Soil Clean",
      desc: "Animal agriculture weakens and depletes fertile soils by being one of the main causes of worldwide deforestation. Meanwhile, planting and raising a variety of plants and trees can reverse the effects of nutrient depletion, nourishing and cleaning the soil for more sustainable agriculture.",
    },
    {
      title: "Cutting Greenhouse Gas Emissions",
      desc: "Greenhouse gasses (often shortened as GHG) are a type of gas that emits radiant energy into the atmosphere, contributing to global warming and climate change. The high levels of carbon dioxide, methane, and other GHG produced by animal agriculture generate over 14% of global emissions, greater than all transportation emissions. Studies show that adopting a vegan diet can cut agricultural greenhouse gases in half.",
    },
    {
      title: "Mitigating Climate Change",
      desc: "With greenhouse gases being the leading cause of climate change, due to the “greenhouse effect”, we should expect Veganism to help mitigate climate change. Studies have found that if everyone went vegan, emissions contributing to global warming would be cut by 70%, enough to stop and reverse the harmful effects of climate change including rising sea levels, floods, melting glaciers, and droughts.",
    },
    {
      title: "Preventing Species Extinction",
      desc: "Animal agriculture impacts the world's biodiversity by using wildland for soy and maize crops, the primary livestock feed. The increasing use of land has led to a number of native species being threatened on a global level, including different species of monkeys, elephants, bears, tigers, alligators, lions, wolves, and parrots. Choosing a vegan diet will go a long way in preventing species extinction by eliminating the need of livestock and factory farms feed crops. Veganism provides a more sustainable agricultural model, focused on feeding people, not animals for slaughter.",
    },
    {
      title: "Combating World Hunger",
      desc: "Livestock feed production also impacts food availability in the areas of the world where many people need food. Animal agriculture monopolizes the world's resources, including water and land, to fuel its production: it is estimated that 36% of the calories produced by the world's crops are being used for animal feed, while only 12% of those feed calories end up contributing to the human diet. Veganism combats world hunger by cutting the “middle man” (in this case the middle animal), as it would be more practical and calorie-efficient to use our planet's resources for crops that feed humans, directly. The aforementioned research shows that growing food exclusively for direct human consumption would increase available food calories up to 70%, feeding an additional 4 billion people worldwide!",
    },
    {
      title: "Reducing Energy Consumption",
      desc: "Livestock requires enormous fossil energy consumption for multiple activities such as the production of feed, breeding, production, and spread of fertilizers, electricity use, and farm operating costs. On the other hand, plant products have much higher energy efficiency, as it's estimated that animal-based protein requires eight times more fossil-fuel energy than creating plant-based protein. A vegan diet saves energy as well as lives!",
    },
    {
      title: "Reducing Air Pollution",
      desc: "We already discussed how animal agriculture is one of the main contributors to GHG emissions, with carbon dioxide (CO2) being one of the most harmful ones for the environment. The meat and animal products industry account for at least 32,000 million tons of carbon dioxide per year. Adopting a vegan diet decreases air pollution by saving carbon dioxide emissions. According to the Veganism Impact Report, the world would see a 70% decrease in CO2 food-related emissions if the current meat-eating population were to go vegan.",
    },
    {
      title: "Preserving Habitats",
      desc: "The meat and dairy industry is also responsible for destroying the native habitats of wild species, with livestock management and feedstock being the single biggest driver of habitat loss in tropical countries. It is estimated that by 2050, Asian and African countries would need a 30-50% increase in land to support growing meat production, permanently destroying the habitats of native species populating the area. If most of the world was to follow a vegan diet, however, the decreased demand for meat products would ensure the preservation of these precious habitats and the species living in them.",
    },
    {
      title: "Preserving Species",
      desc: "The wildlife population is also lost to animal agriculture. In the United States, for example, 3 million wild animals, including threatened and endangered species like wolves, bobcats, and mountain lions, are killed each year by the USDA's Wildlife Services. This is an attempt to protect livestock from natural predators, but countless non-target species are also caught in the middle of this man-made struggle, including different species of protected birds.",
    },
    {
      title: "Stabilizing The Ocean",
      desc: "Overfishing has led to disastrous imbalances in the ocean's biodiversity. Besides massively reducing the fish population worldwide, overfishing has changed the characteristics of the remaining fish, causing a dangerous domino effect that puts the complex ocean food chain at risk. The fish population needs to be balanced in order to affect the ocean's ecosystem the way nature intended, and Veganism stabilizes the ocean by reducing the world's increasing demand for fish.",
    },
    {
      title: "Cleaning Waterways",
      desc: "Livestock feeding pollutes the surrounding waterways with high doses of chemicals, including antibiotics, leading to the appearance of “dead zones”. Although industrial and municipal waste is also major factors contributing to water pollution, animal agriculture is sadly taking the lead as demand for animal products grows. Going vegan won't eliminate the problem entirely, as fertilizers remain a big factor in nutrient pollution, but it will eliminate the great amount of animal waste, hormones, and antibiotics currently polluting our waterways.",
    },
    {
      title: "Protecting The Rainforest And Lands",
      desc: "Animal agriculture is responsible for 91% of the destruction of the Amazon rainforest, and it is the greatest driver of deforestation and land use, worldwide. On the other hand, research has found that following a vegan diet can cut the use of land by 76%, protecting the Amazon, its native tribes, and countless tropical species.",
    },
    {
      title: "Replenishing The Sea",
      desc: "Overfishing has not only thrown the marine ecosystem out of balance, but it has also managed to cut the total fish population in half compared to 1970 - that was only 50 years ago. The demand for tuna and mackerel in particular has become unsustainable, and the two species are currently at the brink of extinction. Going vegan allows marine life to thrive again, repopulating our oceans and replenishing our seas.",
    },
    {
      title: "Removing Nitrous Oxide",
      desc: "When animal waste is broken down, it produces nitrous oxide, which is a greenhouse gas 300 times more potent than CO2 in its warming effect. It is estimated that 6 million tons of nitrous oxide are produced by livestock each year, accounting for 65% of all nitrous oxide emissions. Veganism reduces nitrous oxide emissions by eliminating the demand for livestock, going a long way to restore our planet's climate balance.",
    },
    {
      title: "Stopping Livestock Emission",
      desc: "Between carbon dioxide, methane, and nitrous oxide, one thing is clear: the animal agriculture industry needs to own up to the amount of greenhouse gasses livestock releases into our atmosphere. Livestock emissions account for over 14% of all anthropogenic GHG emissions, with 44% coming from methane alone. If everyone on the planet would go vegan, livestock emissions would stop entirely, single-handedly putting an end to one of the biggest contributors to climate change.",
    },
    {
      title: "Using Fewer Resources",
      desc: "Animal product are significantly more resource-intensive than plant-based foods, with beef requiring the most water consumption and land use for its production. A vegan diet uses fewer resources, as growing plant foods requires five times less water than producing animal-based foods, and a global shift to a vegan diet would reduce land use by a whopping 75%. In comparison, studies show that meat, fish, eggs, and dairy use 83% of the world's farmland and contribute 56 to 58% of food's emissions, while providing 18% of our calories!",
    },
  ];
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <section className="py-16 xl:px-72 px-4">
        <h1 className="text-[#5F5E36] text-4xl text-center mb-8">17 Environmental Benefits of Veganism</h1>
        <p className="text-[#3E3E08] text-center font-light mb-8">
          In 2018, the United Nations identified animal agriculture and meat production as the most urgent problem around the world - a catastrophe of
          our own making.
        </p>
        <p className="text-[#3E3E08] text-center font-light">
          In order to understand why Veganism is good for the environment, we have to look at the ways in which meat, fish, and dairy production is
          seriously impacting our planet&apos;s resources and ecosystem. From greenhouse gas emissions to deforestation, species extinction and water
          pollution, the animal agriculture industry is the main driver behind our planet&apos;s environmental crisis.
        </p>
        <div className="space-y-10 mt-20">
          {card.map((item, index) => (
            <EnvironmentalCard key={index} title={item.title} desc={item.desc} />
          ))}
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default EnvironmentalBenefits;
