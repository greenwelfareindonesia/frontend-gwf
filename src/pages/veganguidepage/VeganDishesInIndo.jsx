import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import VeganDishesCard from "./VeganDishesCard";
import bakwan from "../../assets/veganguide-image/vegandishes/bakwan.webp";
import friedrice from "../../assets/veganguide-image/vegandishes/friedrice.webp";
import gadogado from "../../assets/veganguide-image/vegandishes/gadogado.webp";
import gudeg from "../../assets/veganguide-image/vegandishes/gudeg.webp";
import ketoprak from "../../assets/veganguide-image/vegandishes/ketoprak.webp";
import lontongsayur from "../../assets/veganguide-image/vegandishes/lontongsayur.webp";
import nasiuduk from "../../assets/veganguide-image/vegandishes/nasiuduk.webp";
import oncom from "../../assets/veganguide-image/vegandishes/oncom.webp";
import orektempe from "../../assets/veganguide-image/vegandishes/orektempe.webp";
import pecel from "../../assets/veganguide-image/vegandishes/pecel.webp";
import sambelgorengkentang from "../../assets/veganguide-image/vegandishes/sambelgorengkentang.webp";
import sayurasem from "../../assets/veganguide-image/vegandishes/sayurasem.webp";
import sayurlodeh from "../../assets/veganguide-image/vegandishes/sayurlodeh.webp";
import tahu from "../../assets/veganguide-image/vegandishes/tahu.webp";
import urap from "../../assets/veganguide-image/vegandishes/urap.webp";

function VeganDishesInIndo() {
  const card = [
    {
      title: "Gado - Gado",
      desc: "Gado - Gado or english “mix-mix”is popular Indonesia salad made of vegetables. Gado-Gado are made of sliced deep fried  tofu and tempe (Indonesia fragmented soy beans) add with boiled, blanched or steamed vegetables such as potato, cucumber, been sprouts, spinach, string beans, cabbage, lettuce etc. As for the dressing, Gado-godo use the peanut sauce which made of ground fried peanut, chili, salt, lime juice and leaves , palm sugar and sweet soy sauce and water. It is usually served with lontong (rice wrapped in banana leaf), cracker (kerupuk), emping (Indonesian style fried crackers, which are made from melinjo or gnetum gnemon )  and sprinkles with fried shallots and you also can add boiled egg. It is sold in most part of Indonesia from restaurants, stalls (warung) to humble stroller cart (street food).",
      Image: gadogado,
    },
    {
      title: "Ketoprak",
      desc: "Ketoprak is almost same like gado-gado use the peanut dressing sauce but have different ingredients. Ketoprak is originally from Jakarta and known as vegetarian dish. It is made of fried tofu, boiled rice vermicelli, lontong or ketupat (rice wrapped in banana leaf), smashed chili, garlic, ground fried peanut, water , salt, palm sugar, sweet soy sauce and vegetables such as been sprout, sliced cabbage and cucumber. It was served with peanut sauce and cracker (kerupuk), sprinkles with fried shallots on the top. Keropak only available in Jakarta and usually sold by humble stroller cart ( street food) but also available in restaurants or food stall (warung).",
      Image: ketoprak,
    },
    {
      title: "Vegetable Fried Rice",
      desc: "Nasi-Goreng Fried Rice is one of popular Indonesian foods. It was sold in every part of Indonesia from restaurant, hawker's food, stalls to humble stroller cart ( street food). There are so many variety of fried rice and one of that are vegetable fried rice or known as “nasi goreng biasa”. Vegetable fried rice can be consume by vegetarian as it was made of mixed vegetable, rice, salt, garlic, chili and sweet soy sauce. In addition, sometime they add scramble egg, cucumber, cracker and sprinkles fried shallots depend of preference.",
      Image: friedrice,
    },
    {
      title: "Urap",
      desc: "Sayur Urap or Urab  is originally vegetarian dish from Indonesia. It is also known as salad or often served as side dishes with other foods. Urap made of mix vegetables such as long beans, water spinach, spinach, basil, been sprout, carrot, young cassava leaf, papaya leaf, cabbage and etc. All steamed vegetables are sliced and mix with seasoned and spiced grated coconut (serundeng) for dressing. The grated coconut is usually seasoned with ground garlic, shallot, chili, palm sugar, tamarind juice, salt, coconut sugar, lime leaves and etc. It is very tasty and crunchy and can be consumed as meals or side dishes with rice, cracker, and other foods",
      Image: urap,
    },
    {
      title: "Gudeg",
      desc: "Gudeg is traditional food originally from Yogyakarta, Indonesia. Gudeg have sweet taste and can be considering as vegetarian food as if it is served solely. Gudeg was made from young unripe jack fruit (in indonesian words known as gori: nangka muda). Thus, young unripe jack fruit then boiled with palm sugar and coconut milk add with other spices such as garlic shallot, coriander seed and etc. Gudeg usually served with rice and other dish; however as for vegetarian I recommend just add gudeg with tofu, tempe (Indonesia fragmented soy beans) or hard boiled egg.",
      Image: gudeg,
    },
    {
      title: "Nasi Uduk",
      desc: "Nasi Uduk in English means “mixed rice“original food from Betawi, Jakarta Indonesia. Nasi uduk is almost same like nasi lemak as both rice made from steamed rice cooked in coconut milk add with pandanous leaves, clove and lemongrass. Nowadays, Nasi uduk available in most part of Indonesia and usually served with bawang goreng (fried shallots) on the top with other side dishes such as egg or shredded omelet, tofu, orek tempe (fried spicy tempe), sambal kentang (fried spice potato), gorengan (Indonesia fritter) and etc",
      Image: nasiuduk,
    },
    {
      title: "Lontong Sayur",
      desc: "Lontong sayur is made from two main dishes, lontong (rice cooked in banana leaf) and vegetable coconut soup. The vegetable coconut soup usually made from various vegetable such as young jack fruit (in indonesia; nangka muda) boiled with coconut milk, spices and other ingredients. Then, for the served cut lontong into small cakes add with vegetable coconut milk soup, sprinkle with fried shallot, cracker, orek tempe (fried spice tempe), egg and etc. Sometime, lontong can be substitute with ketupat. Lontong sayur available in most part of Indonesia from restaurant, food stall, food court, warung or street food.",
      Image: lontongsayur,
    },
    {
      title: "Sayur Asam",
      desc: "If Thailand's have Tom Yam soup, then in Indonesia there is sayur asam. Sayur Asam in English means “sour vegetable” originally from Sundanese people, Banten, Indonesia. Sayur Asam has the same sour taste as Tom Yam but both dishes have a different style of cooked and different ingredients used. Sayur Asam can be considered vegetarian food as it was made from Tamarind based soup add with various vegetables such as peanuts, young jack fruit, chayote, melinjo, long beans, corn, etc. Sayur Asam is usually eaten with white rice add with sambal (Indonesian chili) and other side dishes. It is available in most part of Indonesia ether in restaurant, food stalls, warung or often cooked in home.",
      Image: sayurasem,
    },
    {
      title: "Pecel",
      desc: "Pecel is similar like Gado-Gado use the peanut sauce. Pecel is traditional Indonesian salads consist of mixed vegetable in peanut sauce dressing. Vegetable used in pecel are boiled or blanched and for the peanut dressing usually made from ground fried peanut add with water, palm sugar, tamarind juice, garlic, chili paper etc.  Pecel can be served solely or can be add with steamed rice, lontong or ketupat (rice cooked in banana leaf), cracker and other side dishes.",
      Image: pecel,
    },
    {
      title: "Sayur Lodeh",
      desc: "Sayur lodeh have the same pattern with Lontong sayur as both dishes use coconut milk based. As for vegetable uses it almost same like sayur asam the difference of sayur lodeh and  sayur asam is they use tamarind based soup. Sayur Lodeh most often cooked as home dishes but you also can found in restaurants, food stall, warung and etc. Sayur Lodeh can be consider as vegetarian food as it made from vegetable such as jack fruit, squash, long beans, eggplant, corn, tomato, tofu, tempe, ( Indonesia fragmented soy beans), melinjo, bay leaves, galangal and other spices boiled in coconut milk based. Sayur Lodeh usually served with steamed rice or lontong rice cakes add with other dishes.",
      Image: sayurlodeh,
    },
    {
      title: "Tahu or Tofu",
      desc: "Tahu or tofu is popular food in Indonesia and there are many type of dishes use tofu as their basic ingredients. In Indonesia, some dishes made from tofu are Tahu Gejrot (Fried tofu or tahu pong with sauce made from palm sugar, sweet soy sauce, vinegar, bird’s eye chili, garlic, shallots asam jawa etc), Tahu isi (  filled tofu with mix vegetable then coated with rice flour deep fried in hot cooking oil), Tahu Sumedang ( deep fried tofu),Tahu taoge (stir fried diced tofu with beansprouts),Tahu telur (tofu with omelette egg, beansprout, peanuts, and lontong rice cake add with sweet and sour soy sauce.),tahu bacem (tofu boiled with coconut water, palm sugar and spices then fried until brown color), semur tahu, perkedel and other dishes.",
      Image: tahu,
    },
    {
      title: "Bakwan",
      desc: "Bakwan is popular Indonesian foods classified as “gorengan” (Indonesian fritter). Bakwan is sold in most part of Indonesia from restaurants, food stalls to warung and humble trolley card (street food). There are many types of Bakwan from Bakwan Jagung (Bakwan consist of corn), Bakwan Udang (Bakwan consist of prawn or ebi) and Bakwan Sayur (Bakwan consist of mix vegetable cutting into small pieces such as carrot, bean sprout, shredded cabbages, daun bawang etc). The based ingredient to make Bakwan are rice flour (tepung terigu), egg, coconut milk, salt, garlic, shallot, sugar, white paper mix with other ingredients and then, deep fried in hot cooking oil. Bakwan sayur and jagung can be including as vegetarian dishes",
      Image: bakwan,
    },
    {
      title: "Oncom",
      desc: "Oncom is original Sundanesse food from Indonesia and often associated with tempe as both food is made from fermented of soybeans. In some area or province in Indonesia oncom is not popular food and difficult to find the existence. Oncom usually sold in warung or food stalls. There are many type of dishes made from Oncom such as pepes oncom, keripik oncom (fried oncom), sambal oncom, filling for combro (Indonesian fritter) and etc. Oncom can be consider as vegetarian food as it only made from soybean, vinegar and etc.",
      Image: oncom,
    },
    {
      title: "Orek Tempe",
      desc: "Orek Tempe or known as fried spicy tempe is one of popular dishes in Indonesia. Many food use orek tempe as their side dishes such as nasi uduk, nasi kuning and etc. Orek Tempe is vegetarian food as it made from tempe (fragmented soybeans) add with spices fried in hot cooking oil. Orek Tempe also can be add with sweet soy sauce to add more sweet spicy flavor.",
      Image: orektempe,
    },
    {
      title: "Sambal Goreng Kentang",
      desc: "Sambal Goreng Kentang or in English fried spicy potato is one of popular Indonesia side dishes like orek tempe. Both dishes are popular as side dishes for other foods. To make Sambal Goreng Kentang is quite simple as the ingredients uses are potato cut into small cube then deep fried in hot cooking oil, drained then add and stir fry with spices like garlic, shallots, chili, pecans and etc. Sambal Goreng kentang also known as vegetarian food if it is not added with Fried Chicken Gizzard and Liver (Indonesia ;ati ampela), meet or seafood like ebi or prawn. There are few type Sambal goreng kentang such as those which  add with Fried Chicken Gizzard and Liver known as sambal kentang ati ampela some add with prawn.",
      Image: sambelgorengkentang,
    },
  ];
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <section className="py-20">
        <h1 className="text-primary-1 text-4xl text-center mb-28">
          Vegetarian Dishes In Indonesia
        </h1>
        {card.map((item, index) => (
          <VeganDishesCard
            key={index}
            title={item.title}
            desc={item.desc}
            img={item.Image}
          />
        ))}
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default VeganDishesInIndo;
