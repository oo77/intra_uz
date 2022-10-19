<template>
  <q-img :src="AboutCompanyMainImg"
         class="w-full h-120"
         fit="cover"/>

  <div class="container q-mx-auto my-10">

    <div class="mx-3%">
      <div>
        <p ref="me" class="text-center c-[rgb(22,46,130)] text-26px font-700 mb-3 " lg="text-32px"
           v-html="aboutCompany.title[lang.prefix]"/>
        <p class="text-justify text-16px mb-5" lg="text-20px  mx-0 ">
          Сотрудники Научно-исследовательского центра «ИННОВАЦИОННЫЙ ТРАНСПОРТ» (НИЦ «ИННОВАЦИОННЫЙ ТРАНСПОРТ»).
          Директор Научно-исследовательского центра «ИННОВАЦИОННЫЙ ТРАНСПОРТ» Даурен Ихтиярович Илесалиев, д.т.н.,
          профессор.
          Заместитель директора по общим вопросам Александр Александрович Светашев, к.т.н., доцент.
          Заместитель директора по науке Шахрух Шухратович Камалетдинов, (PhD), и.о., доцент.
        </p>
        <div class="grid grid-cols-4 gap-5 my-5">
          <SquadCard v-for="person in squadList" :person="person"/>
        </div>

        <p class="text-justify text-16px mb-5" lg="text-20px  mx-0 ">
          Научно-исследовательский центр обладает достаточно высоким научным потенциалом: в его составе 1 доктор, 1
          кандидат наук, 1 PhD, и 3 ассистента. <br><br>
          Высокий уровень профессиональной подготовки и большой практический опыт работников научно-исследовательского
          центра позволяют эффективно организовывать научную работу, взаимодействовать с отечественными и зарубежными
          научными организациями, выполнять исследования актуальных проблем транспорта и логистики.

        </p>

        <p class="text-justify text-16px mb-5" lg="text-20px  mx-0 ">
          Сотрудники Научно-исследовательского центра «ИННОВАЦИОННЫЙ ТРАНСПОРТ» (НИЦ «ИННОВАЦИОННЫЙ ТРАНСПОРТ»).
          Директор Научно-исследовательского центра «ИННОВАЦИОННЫЙ ТРАНСПОРТ» Даурен Ихтиярович Илесалиев, д.т.н.,
          профессор.
          Заместитель директора по общим вопросам Александр Александрович Светашев, к.т.н., доцент.
          Заместитель директора по науке Шахрух Шухратович Камалетдинов, (PhD), и.о., доцент.
        </p>

        <p ref="me" class="text-center c-[rgb(22,46,130)] text-26px font-700 mb-3 " lg="text-32px">
          История создания центра
        </p>
        <p class="text-justify text-16px mb-5" lg="text-20px  mx-0 ">НИЦ «ИННОВАЦИОННЫЙ ТРАНСПОРТ» возник в 2016 году на
          базе Ташкентского института инженеров железнодорожного транспорта (ТашИИТ) на базе двух кафедр «Транспортная
          логистика и сервис» и «Управление эксплуатационной работой» под руководством д.т.н., профессора Д. И.
          Илесалиевым, который в свою очередь уделял огромное внимание вопросам науки, управления и организацией
          логистических объектов.<br/><br/>
          В научной и образовательной деятельности НИЦ ИННОВАЦИОННЫЙ ТРАНСПОРТ опирается на многолетний опыт и передовые достижения ведущих научных и научно-педагогических школ.<br/><br/>
          Также имеется ряд крупных проектов, в которых принимали активное участие представители научно-исследовательского центра, это и совместные гранты с другими ВУЗами, выполнение различных хозяйственных договоров с предприятиями АО «УТЙ», разработка инструкции, написание большого количества научных трудов, книг, статей и др.<br/><br/>
          На основе произведенных работ были получены ученые степени доктора философии (PhD), в которых Д.И. Илесалиев был научным руководителем. На сегодняшний день (НИЦ ИННОВАЦИОННЫЙ ТРАНСПОРТ) занимается различными проектами в организации управления транспортными системами и логистики.<br/><br/>

        </p>

      </div>

      <AboutUsSlider class="mb-10 q-mx-auto"/>


      <p class="text-center c-[rgb(22,46,130)] text-26px font-700 ma-0 mt-30px mb-10px"
         lg="mt-50px text-32px"
         v-html="pride.title[lang.prefix]"/>


      <div class="mb-50px mx-8%">

        <div v-for="p in pride.prides.length"
             class="list-none border-b-1 border-slate-200 pa-0 flex justify-left text-left"
             lg="justify-between text-left">

          <p class="w-90% text-16px flex items-center ma-0 my-2"
             lg="text-20px my-0"
             v-html="pride.prides[p-1][lang.prefix]"/>
          <q-img :src="proudPNG" class="w-70px h-70px gt-sm"/>
        </div>

      </div>

      <p ref="me" class="text-center c-[rgb(22,46,130)] text-26px font-700 mb-3 " lg="text-32px"
         v-html="partners.title[lang.prefix]"/>
      <PartnersSlide/>


      <Subscribe/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {aboutCompany, AboutCompanyMainImg, partners, pride} from "src/data/AboutUS/AboutUs";
import AboutUsSlider from "components/slidersComponent/GallerySlider.vue";
import PartnersSlide from 'components/slidersComponent/PartnersSlide.vue';
import {useLanguageStore} from "stores/lang";
import proudPNG from 'assets/icons/proudTrue.png'
import {useAboutCompanyMeta} from "src/meta/about_company";
import Subscribe from "components/slidersComponent/subscribe.vue";
import {onActivated, watch} from "vue";
import {squadList} from 'src/data/Home/squad_Data'
import SquadCard from 'src/components/slidersComponent/squadCard.vue'

const lang = useLanguageStore()

useAboutCompanyMeta(lang.prefix)
onActivated(() => {
  watch(lang, () => useAboutCompanyMeta(lang.prefix))
})

</script>

