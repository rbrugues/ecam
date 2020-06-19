let ecam_logo=new Vue({
  el:"#ecam_logo",

  data:{
    visible:false,

    Global,
    Languages,
  },

  methods:{
    translate,
    is_linear_menu_visible(){
      return linear_menu.visible;
    },
  },

  template:`
    <div id=ecam_logo v-if="visible && Languages.ready">
      <!--3 lines menu symbol "burger"-->
      <div id=burger onclick="event.stopPropagation();sidebar.visible^=1">
        &#9776;
      </div>

      <!--logo-->
      <div id=logo_container onclick="ecam.show('landing')">
        <div id=logo>ECAM</div>
        <div>
          {{translate('navbar_title')}}
        </div>
      </div>

      <!--version-->
      <div style="font-family:monospace">
        <a href="//github.com/icra/ecam" target=_blank>
          v{{Global.General.version}}
        </a>
      </div>

      <!--current system name-->
      <div style="font-size:larger" onclick="ecam.show('select_scenario')">
        {{Global.General.Name}}
      </div>

      <!--show linear menu button-->
      <div>
        <button onclick="linear_menu.visible^=true"
          style="padding:0.1em 5em">
          <span v-if="is_linear_menu_visible()">&#9206;&#9206;&#9206;</span>
          <span v-else>&#9207;&#9207;&#9207;</span>
        </button>
      </div>

      <!--language-->
      <div id=lang>
        <!--current language-->
        <img :src="'frontend/img/flags/'+Languages.current+'.png'">

        <!--all languages-->
        <div id=select>
          <div
            v-for="lang in Languages.list"
            :lang="lang"
            @click="Languages.current=lang"
          >
            <img :src="'frontend/img/flags/'+lang+'.png'">
            {{lang}}
          </div>

          <!--null (only language tags)-->
          <div lang=null @click="Languages.current='null'">
            <img src="frontend/img/flags/null.png">
            null (tags only)
          </div>

          <!--language problem finder-->
          <div :lang="Languages.current">
            <a style=color:blue onclick="alert('TODO')">
              language debugging tool
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
});
