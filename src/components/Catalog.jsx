import React from "react";
import "./catalog.css";

function Catalog() {
  return (
    <section className="products">
      <div className="app__container">
        <div className="header__title">22 items</div>
        <div className="products__grid">
          <div className="products__box">
            <a href="/produto/vestido-transpasse-bow">
              <figure className="product__image">
                <img
                  src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg?1460136912"
                  alt="Produto VESTIDO TRANSPASSE BOW"
                  title="VESTIDO TRANSPASSE BOW"
                />
              </figure>
              <h3 className="product__name">VESTIDO TRANSPASSE BOW</h3>
              <div className="product__pricing">
                <span className="product__price product__price--to">
                  R$ 199,90
                </span>
              </div>
            </a>
          </div>
          <div className="products__box">
            <a href="/produto/regata-alcinha-folk">
              <figure className="product__image">
                <img
                  src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002570_002_catalog_1.jpg?1459948578"
                  alt="Produto REGATA ALCINHA FOLK"
                  title="REGATA ALCINHA FOLK"
                />
              </figure>
              <h3 className="product__name">REGATA ALCINHA FOLK</h3>
              <div className="product__pricing">
                <span className="product__price product__price--to">
                  R$ 99,90
                </span>
              </div>
            </a>
          </div>
          <div className="products__box">
            <a href="/produto/top-cropped-suede">
              <figure className="product__image">
                <img
                  src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002575_027_catalog_1.jpg?1459537946"
                  alt="Produto TOP CROPPED SUEDE"
                  title="TOP CROPPED SUEDE"
                />
              </figure>
              <h3 className="product__name">TOP CROPPED SUEDE</h3>
              <div className="product__pricing">
                <span className="product__price product__price--to">
                  R$ 129,90
                </span>
              </div>
            </a>
          </div>
          <div className="products__box">
            <a href="/produto/bata-decote-fluid">
              <figure className="product__image">
                <img
                  src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002581_614_catalog_1.jpg?1459536611"
                  alt="Produto BATA DECOTE FLUID"
                  title="BATA DECOTE FLUID"
                />
              </figure>
              <h3 className="product__name">BATA DECOTE FLUID</h3>
              <div className="product__pricing">
                <span className="product__price product__price--to">
                  R$ 149,90
                </span>
              </div>
            </a>
          </div>
          <div className="products__box">
            <a href="/produto/t-shirt-leather-dull">
              <figure className="product__image">
                <span className="badge badge--discount">-12%</span>
                <img
                  src="https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível"
                  alt="Produto T-SHIRT LEATHER DULL"
                  title="T-SHIRT LEATHER DULL"
                  className="product__placeholder"
                />
              </figure>
              <h3 className="product__name">T-SHIRT LEATHER DULL</h3>
              <div className="product__pricing">
                <span className="product__price product__price--from">
                  R$ 139,90
                </span>
                <span className="product__price product__price--to">
                  R$ 119,90
                </span>
              </div>
            </a>
          </div>
          <div className="products__box">
            <a href="/produto/camisa-suede-span">
              <figure className="product__image">
                <img
                  src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002584_035_catalog_1.jpg?1459947139"
                  alt="Produto CAMISA SUEDE SPAN"
                  title="CAMISA SUEDE SPAN"
                />
              </figure>
              <h3 className="product__name">CAMISA SUEDE SPAN</h3>
              <div className="product__pricing">
                <span className="product__price product__price--to">
                  R$ 189,90
                </span>
              </div>
            </a>
          </div>
          <div className="products__box">
            <a href="/produto/calca-classNameic-print">
              <figure className="product__image">
                <img
                  src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002634_613_catalog_1.jpg?1459548109"
                  alt="Produto CALÇA CLASSIC PRINT"
                  title="CALÇA CLASSIC PRINT"
                />
              </figure>
              <h3 className="product__name">CALÇA CLASSIC PRINT</h3>
              <div className="product__pricing">
                <span className="product__price product__price--to">
                  R$ 159,90
                </span>
              </div>
            </a>
          </div>
          <div className="products__box">
            <a href="/produto/regata-alcinha-folk">
              <figure className="product__image">
                <img
                  src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002570_029_catalog_1.jpg?1459948578"
                  alt="Produto REGATA ALCINHA FOLK"
                  title="REGATA ALCINHA FOLK"
                />
              </figure>
              <h3 className="product__name">REGATA ALCINHA FOLK</h3>
              <div className="product__pricing">
                <span className="product__price product__price--to">
                  R$ 99,90
                </span>
              </div>
            </a>
          </div>
          <div className="products__box">
            <a href="/produto/macaquinho-alfaiataria-peace">
              <figure className="product__image">
                <img
                  src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002612_612_catalog_1.jpg?1459531023"
                  alt="Produto MACAQUINHO ALFAIATARIA PEACE"
                  title="MACAQUINHO ALFAIATARIA PEACE"
                />
              </figure>
              <h3 className="product__name">MACAQUINHO ALFAIATARIA PEACE</h3>
              <div className="product__pricing">
                <span className="product__price product__price--to">
                  R$ 149,90
                </span>
              </div>
            </a>
          </div>
          <div className="products__box">
            <a href="/produto/bolsa-flap-triangle">
              <figure className="product__image">
                <span className="badge badge--discount">-25%</span>
                <img
                  src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002945_027_catalog_1.jpg?1459540966"
                  alt="Produto BOLSA FLAP TRIANGLE"
                  title="BOLSA FLAP TRIANGLE"
                />
              </figure>
              <h3 className="product__name">BOLSA FLAP TRIANGLE</h3>
              <div className="product__pricing">
                <span className="product__price product__price--from">
                  R$ 199,90
                </span>
                <span className="product__price product__price--to">
                  R$ 159,90
                </span>
              </div>
            </a>
          </div>
          <div className="products__box">
            <a href="/produto/vestido-longo-float">
              <figure className="product__image">
                <img
                  src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002606_615_catalog_1.jpg?1459515279"
                  alt="Produto VESTIDO LONGO FLOAT"
                  title="VESTIDO LONGO FLOAT"
                />
              </figure>
              <h3 className="product__name">VESTIDO LONGO FLOAT</h3>
              <div className="product__pricing">
                <span className="product__price product__price--to">
                  R$ 219,90
                </span>
              </div>
            </a>
          </div>
          <div className="products__box">
            <a href="/produto/bata-decote-fluid">
              <figure className="product__image">
                <img
                  src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002581_611_catalog_1.jpg?1459536611"
                  alt="Produto BATA DECOTE FLUID"
                  title="BATA DECOTE FLUID"
                />{" "}
              </figure>
              <h3 className="product__name">BATA DECOTE FLUID</h3>
              <div className="product__pricing">
                <span className="product__price product__price--to">
                  R$ 149,90
                </span>
              </div>
            </a>
          </div>
          <div className="products__box">
            <a href="/produto/vestido-franzido-recortes">
              <figure className="product__image">
                <span className="badge badge--discount">-50%</span>
                <img
                  src="https://d3l7rqep7l31az.cloudfront.net/images/products/20001609_002_catalog_1.jpg?"
                  alt="Produto VESTIDO FRANZIDO RECORTES"
                  title="VESTIDO FRANZIDO RECORTES"
                />
              </figure>
              <h3 className="product__name">VESTIDO FRANZIDO RECORTES</h3>
              <div className="product__pricing">
                <span className="product__price product__price--from">
                  R$ 139,90
                </span>
                <span className="product__price product__price--to">
                  R$ 69,90
                </span>
              </div>
            </a>
          </div>
          <div className="products__box">
            <a href="/produto/calca-comfort-tassel">
              <figure className="product__image">
                <span className="badge badge--discount">-39%</span>
                <img
                  src="https://d3l7rqep7l31az.cloudfront.net/images/products/20001786_594_catalog_1.jpg?1449159646"
                  alt="Produto CALÇA COMFORT TASSEL"
                  title="CALÇA COMFORT TASSEL"
                />
              </figure>
              <h3 className="product__name">CALÇA COMFORT TASSEL</h3>
              <div className="product__pricing">
                <span className="product__price product__price--from">
                  R$ 139,90
                </span>
                <span className="product__price product__price--to">
                  R$ 84,90
                </span>
              </div>
            </a>
          </div>
          <div className="products__box">
            <a href="/produto/saia-denim-botões">
              <figure className="product__image">
                <span className="badge badge--discount">-39%</span>
                <img
                  src="https://d3l7rqep7l31az.cloudfront.net/images/products/20001695_063_catalog_1.jpg?"
                  alt="Produto SAIA DENIM BOTÕES"
                  title="SAIA DENIM BOTÕES"
                />
              </figure>
              <h3 className="product__name">SAIA DENIM BOTÕES</h3>
              <div className="product__pricing">
                <span className="product__price product__price--from">
                  R$ 139,90
                </span>
                <span className="product__price product__price--to">
                  R$ 69,90
                </span>
              </div>
            </a>
          </div>
          <div className="products__box">
            <a href="/produto/blusa-laco-istambul">
              <figure className="product__image">
                <img
                  src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002600_293_catalog_1.jpg?1460416037"
                  alt="Produto BLUSA LAÇO ISTAMBUL"
                  title="BLUSA LAÇO ISTAMBUL"
                />
              </figure>
              <h3 className="product__name">BLUSA LAÇO ISTAMBUL</h3>
              <div className="product__pricing">
                <span className="product__price product__price--to">
                  R$ 149,90
                </span>
              </div>
            </a>
          </div>
          <div className="products__box">
            <a href="/produto/blusa-rib-stripes">
              <figure className="product__image">
                <img
                  src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002829_006_catalog_1.jpg?1459550820"
                  alt="Produto BLUSA RIB STRIPES"
                  title="BLUSA RIB STRIPES"
                />
              </figure>
              <h3 className="product__name">BLUSA RIB STRIPES</h3>
              <div className="product__pricing">
                <span className="product__price product__price--to">
                  R$ 149,90
                </span>
              </div>
            </a>
          </div>
          <div className="products__box">
            <a href="/produto/casaco-white-fur">
              <figure className="product__image">
                <img
                  src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002648_029_catalog_1.jpg?1459552552"
                  alt="Produto CASACO WHITE FUR"
                  title="CASACO WHITE FUR"
                />
              </figure>
              <h3 className="product__name">CASACO WHITE FUR</h3>
              <div className="product__pricing">
                <span className="product__price product__price--to">
                  R$ 239,90
                </span>
              </div>
            </a>
          </div>
          <div className="products__box">
            <a href="/produto/vestido-curto-festival">
              <figure className="product__image">
                <span className="badge badge--discount">-54%</span>
                <img
                  src="https://d3l7rqep7l31az.cloudfront.net/images/products/20001684_585_catalog_1.jpg?"
                  alt="Produto VESTIDO CURTO FESTIVAL"
                  title="VESTIDO CURTO FESTIVAL"
                />
              </figure>
              <h3 className="product__name">VESTIDO CURTO FESTIVAL</h3>
              <div className="product__pricing">
                <span className="product__price product__price--from">
                  R$ 129,90
                </span>
                <span className="product__price product__price--to">
                  R$ 59,90
                </span>
              </div>
            </a>
          </div>
          <div className="products__box">
            <a href="/produto/oculos-de-sol-bold">
              <figure className="product__image">
                <span className="badge badge--discount">-55%</span>
                <img
                  src="https://d3l7rqep7l31az.cloudfront.net/images/products/20001882_008_catalog_1.jpg?"
                  alt="Produto ÓCULOS DE SOL BOLD"
                  title="ÓCULOS DE SOL BOLD"
                />
              </figure>
              <h3 className="product__name">ÓCULOS DE SOL BOLD</h3>
              <div className="product__pricing">
                <span className="product__price product__price--from">
                  R$ 109,90
                </span>
                <span className="product__price product__price--to">
                  R$ 49,90
                </span>
              </div>
            </a>
          </div>
          <div className="products__box">
            <a href="/produto/oculos-de-sol-aviador-vintage">
              <figure className="product__image">
                <span className="badge badge--discount">-55%</span>
                <img
                  src="https://d3l7rqep7l31az.cloudfront.net/images/products/20001883_019_catalog_1.jpg?"
                  alt="Produto ÓCULOS DE SOL AVIADOR VINTAGE"
                  title="ÓCULOS DE SOL AVIADOR VINTAGE"
                />
              </figure>
              <h3 className="product__name">ÓCULOS DE SOL AVIADOR VINTAGE</h3>
              <div className="product__pricing">
                <span className="product__price product__price--from">
                  R$ 109,90
                </span>
                <span className="product__price product__price--to">
                  R$ 49,90
                </span>
              </div>
            </a>
          </div>
          <div className="products__box">
            <a href="/produto/pulseira-stylish">
              <figure className="product__image">
                <img
                  src="https://d3l7rqep7l31az.cloudfront.net/images/products/20001913_009_catalog_1.jpg?"
                  alt="Produto PULSEIRA STYLISH"
                  title="PULSEIRA STYLISH"
                />
              </figure>
              <h3 className="product__name">PULSEIRA STYLISH</h3>
              <div className="product__pricing">
                <span className="product__price product__price--to">
                  R$ 29,90
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Catalog;
