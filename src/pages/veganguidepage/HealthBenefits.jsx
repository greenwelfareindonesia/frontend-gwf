import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import EnvronmentalCard from "../veganguidepage/EnvironmentalCard";

function HealthBenefits() {
  const card = [
    {
      title: "A vegan diet is richer in certain nutrients",
      desc: "If you switch to a vegan diet from a typical Western diet, you'll eliminate meat and animal products. This will inevitably lead you to rely more heavily on other foods. In the case of a whole-foods vegan diet, replacements take the form of whole grains, fruits, vegetables, beans, peas, nuts, and seeds. Since these foods make up a larger proportion of a vegan diet than a typical Western diet, they can contribute to a higher daily intake of certain beneficial nutrients. Several studies have reported that vegan diets tend to provide more fiber, antioxidants, and beneficial plant compounds. They also appear to be richer in potassium, magnesium, folate, and vitamins A, C, and E. Vegan diets even appear to be higher in iron, though the form of iron that plants provide is not as bioavailable as the form found in animal foods. However, not all vegan diets are created equal. For instance, poorly planned vegan diets may not provide sufficient amounts of essential fatty acids, vitamin B12, niacin, riboflavin (vitamin B2), vitamin D, calcium, iodine, selenium, or zinc. That's why it's essential to choose whole plant foods and fortified foods. You may need to consider supplements for nutrients such as vitamins B12 and D, zinc, and calcium, since these may be lacking in a vegan diet. While whole-food vegan diets are generally higher in certain nutrients, poorly planned vegan diets may lead to deficiencies of several key nutrients.",
    },
    {
      title: "It can help you lose excess weight",
      desc: "An increasing number of people are turning to plant-based diets in hopes of shedding excess weight. This may be for good reason. Many observational studies suggest that vegans tend to be thinner and have lower body mass indexes (BMIs) than nonvegans. In addition, several randomized controlled studies — the gold standard in scientific research — report that vegan diets are more effective for weight loss than the diets they are compared with. What's more, a small study comparing the weight loss effects of five different diets concluded that vegetarian and vegan diets were just as well-accepted as semi vegetarian and standard Western diets. Even when they weren't following their diets perfectly, the participants in the vegetarian and vegan groups still lost slightly more weight than those on a standard Western diet. Vegan diets naturally tend to reduce your calorie intake. This makes them effective at promoting weight loss without the need to actively focus on cutting calories.",
    },
    {
      title:
        "It appears to lower blood sugar levels and improve kidney function",
      desc: "Going vegan may also provide benefits for type 2 diabetes and declining kidney function. Indeed, vegans tend to have lower blood sugar levels and higher insulin sensitivity and may have a lower risk of developing type 2 diabetes. Studies even report that vegan diets lower blood sugar levels in people with diabetes more than the diets from the American Diabetes Association (ADA) and the National Cholesterol Education Program. In one 2009 study, 43% of participants following a vegan diet were able to reduce their dosage of blood sugar-lowering medication, compared with only 26% of participants who followed an ADA-recommended diet. Research also suggests that people with diabetes who substitute plant protein for meat may reduce their risk of poor kidney function, but more research is needed on this topic. What's more, several studies report that a vegan diet may be able to relieve symptoms of systemic distal polyneuropathy, a condition in people with diabetes that causes sharp, burning pain. Vegan diets may reduce the risk of type 2 diabetes. They are also particularly effective at reducing blood sugar levels and may help prevent further medical issues from developing.",
    },
    {
      title: "A vegan diet may protect against certain cancers",
      desc: "According to the World Health Organization, about one-third of all cancers can be prevented by factors within your control, including diet. For instance, eating legumes regularly may reduce your risk of colorectal cancer by 9-18%. Research also suggests that eating at least 7 portions of fresh fruits and vegetables per day may lower your risk of dying from cancer by up to 15%. Vegans generally eat considerably more legumes, fruits, and vegetables than non vegans. This may explain why a review of 96 studies found that vegans may benefit from a 15% lower risk of developing or dying from cancer. Certain aspects of the vegan diet may offer protection against prostate, breast, and colon cancers.",
    },
    {
      title: "It's linked to a lower risk of heart disease",
      desc: "Eating fresh fruits and vegetables, legumes, and fiber is linked to a lower risk of heart disease. Well-planned vegan diets generally include all these foods in large amounts. Observational studies comparing vegans with vegetarians and the general population report that vegans may benefit from up to a 75% lower risk of developing high blood pressure. Vegans may also have up to a 42% lower risk of dying from heart disease. Vegan diets may benefit heart health by significantly reducing the risk factors that contribute to heart disease.",
    },
    {
      title: "A vegan diet can reduce pain from arthritis",
      desc: "A few studies have reported that a vegan diet has positive effects in people with different types of arthritis. One study randomly assigned 40 people with arthritis to either continue eating their omnivorous diet or switch to a whole-food, plant-based vegan diet for 6 weeks. Vegan diets based on probiotic-rich whole foods may significantly decrease symptoms of osteoarthritis and rheumatoid arthritis.",
    },
  ];
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <section className="py-14 xl:px-60 px-4">
        <h1 className="text-7xl text-primary-1 mb-20 text-center">
          Health Benefits of Eating Plant-Based
        </h1>
        <div className="space-y-8">
          {card.map((item, index) => (
            <EnvronmentalCard key={index} title={item.title} desc={item.desc} />
          ))}
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HealthBenefits;
