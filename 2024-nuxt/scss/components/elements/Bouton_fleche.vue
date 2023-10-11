<script setup>
//Import des fichiers utiles au codage
import { computed } from 'vue'
import flecheSuivant from '../icons/icons-elements/fleche_suivant.vue'
import flecheRetour from '../icons/icons-elements/fleche_retour.vue'
import icon_telephone from '../icons/icons-elements/icon_telephone.vue'
import icon_loupe from '../icons/icons-elements/icon_loupe.vue'
import icon_localisation from '../icons/icons-elements/icon_localisation.vue'
import icon_horloge from '../icons/icons-elements/icon_horloge.vue'
import icon_etoile from '../icons/icons-elements/icon_etoile.vue'
import icon_couverts_croix from '../icons/icons-elements/icon_couverts_croix.vue'
import icon_couvert from '../icons/icons-elements/icon_couvert.vue'
import icon_camion from '../icons/icons-elements/icon_camion.vue'
import icon_achat from '../icons/icons-elements/icon_achat.vue'
import icon_fleche from '../icons/icons-elements/fleche_orange.vue'
import icon_facebook from '../icons/icons-elements/icon_facebook.vue'
import icon_twitter from '../icons/icons-elements/icon_twitter.vue'
import icon_linkedin from '../icons/icons-elements/icon_linkedin.vue'
import icon_instagram from '../icons/icons-elements/icon_instagram.vue'
import icon_action from '../icons/icons-elements/triangle_orange.vue'

//Création des propriétés de l'élément
const props = defineProps({
  couleur: String,
  icon: String,
  size: String,
  fleche_orange: String
})

//Création de la constance classNameBG qui va retourner la class l'icon selon la valeur entrée
const classNameBG = computed(() => ({
  ' -black': props.couleur === 'black',
  ' -orange': props.couleur === 'orange',
  ' -orange_clair': props.couleur === 'orange_clair',
  ' -white': props.couleur === 'white',
  ' -default': props.couleur === 'default',
  '-small': props.size === 'small',
  '-big': props.size === 'big'
}))

//Création d'une constante couleurF qui va retourner la couleur de l'icon selon la couleur de fond entrée
const couleurF = computed(() => {
  if (props.couleur === 'black' || props.couleur === 'orange') {
    return 'white'
  } else if (props.couleur === 'orange_clair') {
    return 'orange'
  } else {
    return 'black'
  }
})

//Création d'une constante fleche_orange qui va retourner une couleur si l'icon seléctionné est fleche et selon la couleur de fond entrée
const fleche_orangeV = computed(() => {
  if ((props.icon === 'fleche' && props.couleur === 'white') || props.couleur === 'orange_clair') {
    return 'orange'
  } else if ((props.icon === 'fleche' && props.couleur === 'orange') || props.couleur === 'black') {
    return 'white'
  } else {
    return 'black'
  }
})

//Création d'une constante getIcon qui va retourner un nom d'icon différent selon la valeur de la propriété icon
const getIcon = computed(() => {
  switch (props.icon) {
    case 'action':
      return icon_action
    case 'telephone':
      return icon_telephone
    case 'loupe':
      return icon_loupe
    case 'localisation':
      return icon_localisation
    case 'horloge':
      return icon_horloge
    case 'etoile':
      return icon_etoile
    case 'couverts_croix':
      return icon_couverts_croix
    case 'couverts':
      return icon_couvert
    case 'camion':
      return icon_camion
    case 'achat':
      return icon_achat
    case 'fleche_suivant':
      return flecheSuivant
    case 'fleche':
      return icon_fleche
    case 'facebook':
      return icon_facebook
    case 'twitter':
      return icon_twitter
    case 'linkedin':
      return icon_linkedin
    case 'instagram':
      return icon_instagram
    default:
      return flecheRetour
  }
})
</script>

<!--Mise en place de l'élément avec toutes les propriétés nécessaires :
- :class="classNameBG" pour avoir la couleur de fond de l'icon
- :is="getIcon" pour savoir l'icon choisi
- :couleurF="couleurF" pour avoir la couleur de l'icon
- :fleche_orange="fleche_orange" pour voir si l'icon est la fleche et quelle couleur a été choisie pour agir en conséquence
- :size="size" pour avoir la taille du bouton-->
<template>
  <div class="icon" :class="classNameBG">
    <component :is="getIcon" :couleurF="couleurF" :fleche_orange="fleche_orangeV" :size="size" />
  </div>
</template>

<style lang="scss" scoped>
.icon {
  align-items: center;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  box-shadow: 0px 0px rem(25) $neon;
  svg {
    width: 50%;
  }

  &.-default {
    background-color: none;
    box-shadow: 0px 0px 0px $neon;
  }

  &.-black {
    background-color: $black;
  }

  &.-orange {
    background-color: $primary-color;
  }

  &.-orange_clair {
    background-color: $secondary-color;
  }

  &.-white {
    background-color: $white;
  }

  &.-small {
    width: 42px;
    height: 42px;
  }

  &.-big {
    width: 82px;
    height: 82px;
    svg {
      width: 50%;
    }
  }
}
</style>
