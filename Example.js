import React, { Fragment } from 'react'
import { Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
import WebView from 'react-native-webview'
import HTML from 'react-native-render-html'
import { IGNORED_TAGS, alterNode, makeTableRenderer } from 'react-native-render-html-table-bridge'


const config = {
  WebViewComponent: WebView,
}

const renderers = {
  table: makeTableRenderer(config),
}

const htmlConfig = {
  alterNode,
  renderers,
  ignoredTags: IGNORED_TAGS,
}

const testHtml = `<h4>EU REACH – Addition of 10 SVHCs to Candidate List Announced by ECHA</h4><intertek><img src ="" alt="EU REACH – Addition of 10 SVHCs to Candidate List Announced by ECHA"></intertek><p>28 June 2018</p><p>The European Chemicals Agency (ECHA) announced the addition of 10 new Substances of Very High Concern (SVHCs) to the Candidate List, bringing the total number of substances on the list to 191.</p><p>The 10 substances are detailed below for reference.</p><div align="center"><table border="1" cellspacing="0" cellpadding="0"><tbody><tr><td><p align="center"><b>#</b></p></td><td width="195"><p align="center"><b>Substance Name</b></p></td><td width="78"><p align="center"><b>EC Number</b></p></td><td width="84"><p align="center"><b>CAS Number</b></p></td><td width="120"><p align="center"><b>Reason for inclusion</b></p></td><td width="133"><p align="center"><b>Example(s) of use</b></p></td></tr><tr><td><p>1</p></td><td width="195"><p>Octamethylcyclotetrasiloxane (D4)</p></td><td width="78"><p>209-136-7</p></td><td width="84"><p>556-67-2</p></td><td width="120"><p>PBT (Article 57d)</p><p>vPvB (Article 57e)</p></td><td width="133" valign="top"><p>Used in washing and cleaning   products, polishes and waxes and cosmetics and personal care products.</p></td></tr><tr><td><p>2</p></td><td width="195"><p>Decamethylcyclopentasiloxane (D5)</p></td><td width="78"><p>208-764-9</p></td><td width="84"><p>541-02-6</p></td><td width="120"><p>PBT (Article 57d)</p><p>vPvB (Article 57e)</p></td><td width="133" valign="top"><p>Used in washing and cleaning   products, polishes and waxes, cosmetics and personal care products, textile   treatment products and dyes.</p></td></tr><tr><td><p>3</p></td><td width="195"><p>Dodecamethylcyclohexasiloxane (D6)</p></td><td width="78"><p>208-762-8</p></td><td width="84"><p>540-97-6</p></td><td width="120"><p>PBT (Article 57d)</p><p>vPvB (Article 57e)</p></td><td width="133" valign="top"><p>Used in washing and cleaning   products, polishes and waxes, cosmetics and personal care products.</p></td></tr><tr><td><p>4</p></td><td width="195"><p>Lead</p></td><td width="78"><p>231-100-4</p></td><td width="84"><p>7439-92-1</p></td><td width="120"><p>Toxic for reproduction (Article 57c)</p></td><td width="133" valign="top"><p>Used in metals, welding and soldering   products, metal surface treatment products, and polymers.</p></td></tr><tr><td><p>5</p></td><td width="195"><p>Disodium octaborate</p></td><td width="78"><p>234-541-0</p></td><td width="84"><p>12008-41-2</p></td><td width="120"><p>Toxic for reproduction (Article 57c)</p></td><td width="133" valign="top"><p>Used in anti-freeze products, heat   transfer fluids, lubricants and greases, and washing and cleaning products.</p></td></tr><tr><td><p>6</p></td><td width="195"><p>Benzo[ghi]perylene</p></td><td width="78"><p>205-883-8</p></td><td width="84"><p>191-24-2</p></td><td width="120"><p>PBT (Article 57d)</p><p>vPvB (Article 57e)</p></td><td width="133" valign="top"><p>Not registered under REACH. Normally   not produced intentionally but rather occurs as a constituent or impurity in   other substances.</p></td></tr><tr><td><p>7</p></td><td width="195"><p>Terphenyl hydrogenated</p></td><td width="78"><p>262-967-7</p></td><td width="84"><p>61788-32-7</p></td><td width="120"><p>vPvB (Article 57e)</p></td><td width="133" valign="top"><p>Used as a plastic additive, solvent,   in coatings/inks, in adhesives and sealants, and heat transfer fluids.</p></td></tr><tr><td><p>8</p></td><td width="195"><p>Ethylenediamine (EDA)</p></td><td width="78"><p>203-468-6</p></td><td width="84"><p>107-15-3</p></td><td width="120"><p>Respiratory sensitising properties   (Article 57(f) - human health)</p></td><td width="133" valign="top"><p>Used in adhesives and sealants,   coating products, fillers, putties, plasters, modelling clay, pH regulators   and water treatment products.</p></td></tr><tr><td><p>9</p></td><td width="195"><p>Benzene-1,2,4-tricarboxylic acid 1,2   anhydride (trimellitic anhydride) (TMA)</p></td><td width="78"><p>209-008-0</p></td><td width="84"><p>552-30-7</p></td><td width="120"><p>Respiratory sensitising properties   (Article 57(f) - human health)</p></td><td width="133" valign="top"><p>Used in the manufacture of esters and   polymers.</p></td></tr><tr><td><p>10</p></td><td width="195"><p>Dicyclohexyl phthalate (DCHP)</p></td><td width="78"><p>201-545-9</p></td><td width="84"><p>84-61-7</p></td><td width="120"><p>Toxic for reproduction (Article 57c)</p><p>Endocrine disrupting properties (Article 57(f) - human health)</p></td><td width="133" valign="top"><p>Used in plastisol, PVC, rubber and   plastic articles. A further use is also as a phlegmatiser and dispersing   agent for formulations of organic peroxides.</p></td></tr></tbody></table></div><p>Producers and importers of articles containing a substance included in the Candidate List have six months from 27<sup>th</sup> June 2018 to notify ECHA if the following conditions apply:</p><ul><li>the substance is present in those articles in quantities over one tonne per producer or importer per year, and</li><li>the substance is present in those articles above a concentration of 0.1% weight by weight.</li></ul><p>In addition, the suppliers of articles which contain these substances on in a concentration above 0.1% (w/w) must provide sufficient information to allow safe use of the article to their customers or, upon request, to a consumer within 45 days of the receipt of the request. This information must contain as a minimum the name of the substance.</p><p>A link to the notification by ECHA is below:<br /><a href="https://echa.europa.eu/-/ten-new-substances-added-to-the-candidate-list" target="_blank" rel="nofollow">https://echa.europa.eu/-/ten-new-substances-added-to-the-candidate-list</a></p><p>A link to the full candidate list of SVHCs is below:<br /><a href="http://echa.europa.eu/web/guest/candidate-list-table" target="_blank" rel="nofollow">http://echa.europa.eu/web/guest/candidate-list-table</a></p><p> </p>`
export default class Example extends React.PureComponent<any> {

  render() {
    return (
      <ScrollView 
        style={{ flex: 1, backgroundColor: 'white' }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginHorizontal: 15 }}>
        <HTML
          {...htmlConfig}
          html={testHtml}
          imagesMaxWidth={Dimensions.get('window').width - 15 * 2}
          baseFontStyle={{ fontSize: 15 }}
        />
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({

})
