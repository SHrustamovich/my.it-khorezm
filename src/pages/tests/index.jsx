import PaginationArrowIcon from "@/assets/icons/paginationArrowIcon";
import { Pagination } from "antd";
import { useState } from "react";
import TestTime from "./components/testTime";

const Test = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="test">
      <div style={{ display: "flex", flexDirection: "column", gap: "100px" }}>
        <Pagination
          // pageSize={5}
          defaultCurrent={1}
          total={500}
          itemRender={(page, type) => {
            if (type === "next") {
              return (
                <a className="action__btn">
                  <PaginationArrowIcon />
                </a>
              );
            } else if (type === "prev") {
              return (
                <a className="action__btn">
                  <PaginationArrowIcon
                    style={{ transform: "rotate(-180deg)" }}
                  />
                </a>
              );
            }
            if (type === "page") {
              return <a>{page}-dars</a>;
            }
          }}
          current={currentPage}
          onChange={(page, pageSize) => {
            setCurrentPage(page);
          }}
        />
        <div>{currentPage}-dars</div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        soluta dolores officia dolorem voluptatum nulla! Delectus tempora
        aliquid maxime earum corrupti illo exercitationem aperiam fugit minima,
        nihil ex veniam omnis itaque at repudiandae voluptatem quia provident
        sunt magnam dicta labore. Laboriosam numquam ipsam eveniet ipsa dolores
        officiis dolorum atque dolor quam, qui voluptate voluptatem aspernatur
        neque ducimus ab et consequuntur iure eos a est sit dignissimos.
        Molestias similique, dolorem earum possimus iure voluptatibus autem
        totam deleniti obcaecati deserunt magnam ab officiis libero maiores,
        eaque expedita mollitia esse iusto nam? Tempore culpa error sunt modi
        esse corrupti. Laboriosam quos iure molestias eius, dolores totam
        quibusdam laborum suscipit dicta debitis atque perspiciatis nisi quis.
        Amet, vel? Sequi nobis nulla tempora nostrum. Laboriosam quod suscipit,
        eligendi dolorem repellendus assumenda autem inventore laudantium
        voluptatem veritatis molestiae minus. Reiciendis quas voluptas, facilis
        excepturi velit necessitatibus, commodi atque deserunt veritatis
        distinctio, eum asperiores doloremque iusto odit vitae. Eius nostrum
        atque a adipisci nemo cum deserunt, quia suscipit unde fugiat, iusto hic
        odit officia eum voluptatem ducimus necessitatibus repellat itaque
        consectetur doloribus optio velit quam perferendis. Enim vero, tempora
        repellendus atque autem nesciunt explicabo labore animi magni
        perferendis, qui consectetur laudantium nostrum voluptates beatae
        placeat corporis voluptate quibusdam accusamus neque odit consequatur.
        Officiis reiciendis labore nemo illo. Dolorem doloremque eveniet laborum
        iure quam impedit alias vero possimus, dignissimos provident nisi hic
        adipisci enim, pariatur et explicabo repellendus non voluptatum
        nesciunt! Quidem quisquam doloremque est laudantium in numquam quae
        consequuntur expedita neque voluptates asperiores ipsa omnis minima,
        reiciendis voluptate voluptas libero, illum, corrupti mollitia?
        Repellendus, similique provident rem quae asperiores, numquam quisquam
        commodi eveniet iure, natus cumque. Laborum, assumenda deleniti,
        perferendis corrupti consequuntur, dignissimos cumque sapiente ipsa ex
        aperiam sit! Eum impedit distinctio laudantium commodi ullam iste enim
        aut unde architecto officia hic sint voluptatibus placeat, delectus rem
        accusantium, quas est. Itaque, nihil quisquam dicta esse totam deleniti
        nisi fuga magni, incidunt vel sunt eos nulla porro repellendus eum.
        Quisquam quia modi iste in! Accusamus error voluptas quas ratione enim,
        praesentium ipsa corrupti tempora! Voluptates sunt atque quod ut
        assumenda necessitatibus! Numquam exercitationem facere quidem nesciunt
        vel rem sed iusto inventore corrupti pariatur odio maiores dolorem, ab
        eveniet delectus facilis. Blanditiis velit animi tempore id expedita
        doloribus provident, alias sapiente totam beatae ut repellat tempora
        magnam magni nihil explicabo atque nulla cupiditate numquam, rerum vero.
        Eius molestias at facilis laudantium illo odio tempora mollitia iusto
        libero dignissimos, adipisci architecto deleniti nisi autem, aliquam
        totam laborum perferendis animi sequi. Deleniti laudantium facere dicta
        rem quisquam sunt facilis. Explicabo sint dicta est amet. Officia
        ducimus alias repudiandae reiciendis sequi iusto facere nobis tempore.
        Nihil adipisci aut tempora excepturi, velit ipsum architecto quidem.
        Totam quaerat nesciunt, facere, vitae ab doloribus et a laboriosam
        distinctio unde, dolores tempora molestias? Ea eligendi fuga nisi
        tempora sunt totam quidem, pariatur dolorem aspernatur dignissimos iusto
        rerum voluptate sed obcaecati eveniet quibusdam distinctio illum
        voluptatibus sit labore, repellendus similique, veritatis amet.
        Cupiditate blanditiis velit facere pariatur, quidem rem exercitationem
        architecto odit ad et a quam adipisci veritatis facilis ut iusto soluta
        sapiente! Temporibus harum natus provident similique, officia ut, cum
        sapiente eos fugiat, dolorem ipsa vitae in vero sint ullam inventore!
        Deserunt inventore natus dignissimos eius provident! Sunt repellat unde
        magnam iste quasi qui soluta inventore facilis accusamus porro quis,
        harum cupiditate impedit similique aut veritatis consequatur, nostrum
        dolor quos aliquam ullam cumque molestiae voluptatibus fugiat! Laborum
        ipsum earum sapiente ex quibusdam. Rerum quisquam vero doloremque at!
        Tempore tempora a assumenda ut impedit dolore, explicabo animi obcaecati
        suscipit illum fuga, quam praesentium quo? Aliquam molestiae dolorum
        asperiores eius culpa odit! Eveniet distinctio perspiciatis quas atque,
        eum cumque excepturi iure laborum sapiente dignissimos est, ut veritatis
        voluptates quibusdam nam aliquid! Pariatur odio nam repellat. Quae
        magnam aut ipsum aliquid fugiat dicta consequatur blanditiis possimus
        iusto eius explicabo sint totam, in cupiditate praesentium expedita,
        eaque suscipit nam vero repellendus ducimus numquam doloribus. Optio
        possimus saepe quibusdam totam, doloribus voluptates hic aliquid
        recusandae. Necessitatibus aperiam quas reprehenderit voluptatibus,
        debitis eaque nam. Explicabo id voluptatum, sunt beatae autem ea porro
        cumque labore quae aspernatur facilis dolorem adipisci vero accusamus
        eligendi assumenda dignissimos nobis suscipit voluptate veritatis! Nisi
        quae quis, quo minima molestiae perspiciatis libero nobis fugit ea non
        tempora, labore autem. Maiores dolor magnam, nulla laborum fugit
        recusandae eaque voluptates natus quaerat eum ipsam, tenetur quae
        aspernatur, repellendus magni dolorum totam dignissimos sapiente hic!
        Nisi magnam, ducimus ullam labore atque libero accusamus in delectus,
        alias incidunt odit eligendi! Facere, voluptates nesciunt! Commodi quas
        vero sequi labore perferendis aspernatur inventore atque ratione enim?
        Excepturi magni mollitia corrupti reiciendis error, ullam nostrum nihil
        vel magnam enim quo ipsam optio numquam ratione facere nemo fugiat,
        minima similique harum illo. Dolor sequi, veniam culpa aut fugiat
        dolorum autem ratione repudiandae assumenda amet inventore temporibus
        aliquam suscipit similique, dolorem, voluptatum dolore tenetur dicta
        obcaecati sit velit doloribus molestiae numquam eveniet. Sapiente
        excepturi dignissimos deserunt labore accusamus sit, cumque velit illum
        repellendus modi a officia fugit blanditiis dolorem qui. Fugiat eligendi
        assumenda consequatur! Voluptate pariatur nam non amet nemo consequatur
        explicabo. Dolore, quos odio consequatur fugit perspiciatis eius,
        dolores ullam rem voluptas amet ipsum? Voluptatibus rem pariatur
        accusantium labore cum nemo numquam asperiores hic alias recusandae,
        dolore a natus illo iste ea quia. Quasi sit harum soluta repellendus
        debitis recusandae quaerat, repellat provident perspiciatis non eum nemo
        quia in vitae perferendis laborum atque facere exercitationem, animi
        ducimus. Nostrum nam deserunt ab distinctio quaerat veniam? Quisquam
        consectetur nulla quia doloremque atque architecto ut corrupti iusto
        nam, odio distinctio culpa non eius, expedita libero deserunt at.
        Pariatur corrupti laborum rerum ratione repudiandae impedit officia
        obcaecati, labore ab nobis odit id. Quaerat, eveniet ducimus repudiandae
        molestias tempora consectetur illo? Ipsa deserunt sint, temporibus
        molestias iste non ut quaerat doloribus. Sint ipsum, omnis dolorum a
        nostrum eos ea aut impedit amet earum quos ipsa laudantium facere porro,
        consequuntur nihil quas, assumenda voluptatum beatae corrupti voluptas
        explicabo quod vitae illum! Voluptate, accusantium dignissimos facilis
        unde enim, commodi perspiciatis ipsum adipisci dolorum nostrum at
        consectetur maiores? Similique accusamus obcaecati cupiditate mollitia
        quis.
      </p>
      <TestTime />
    </div>
  );
};

export default Test;
