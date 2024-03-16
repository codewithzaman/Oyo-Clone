import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hotel = () => {
  return (
    <div className="border-2 border-red-400 rounded-lg h-72 w-full mb-5 p-5">
      <div className="flex ">
        <Image
          src={
            "https://img.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg?w=360&t=st=1710612120~exp=1710612720~hmac=1484c60c805da88266ed6a9bd4cd87efad864be511d4907081c21c06adc82058"
          }
          alt="hotel"
          width={200}
          height={200}
          className="h-60 w-96 mr-3"
        />
        <div className="grid grid-rows-3 ">
          <Image
            src={
              "https://img.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg?w=360&t=st=1710612120~exp=1710612720~hmac=1484c60c805da88266ed6a9bd4cd87efad864be511d4907081c21c06adc82058"
            }
            alt="hotel"
            width={200}
            height={200}
            className=" w-28 "
          />
          <Image
            src={
              "https://img.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg?w=360&t=st=1710612120~exp=1710612720~hmac=1484c60c805da88266ed6a9bd4cd87efad864be511d4907081c21c06adc82058"
            }
            alt="hotel"
            width={200}
            height={200}
            className=" w-28 "
          />
          <Image
            src={
              "https://img.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg?w=360&t=st=1710612120~exp=1710612720~hmac=1484c60c805da88266ed6a9bd4cd87efad864be511d4907081c21c06adc82058"
            }
            alt="hotel"
            width={200}
            height={200}
            className=" w-28"
          />
          <Image
            src={
              "https://img.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg?w=360&t=st=1710612120~exp=1710612720~hmac=1484c60c805da88266ed6a9bd4cd87efad864be511d4907081c21c06adc82058"
            }
            alt="hotel"
            width={200}
            height={200}
            className=" w-28"
          />
        </div>
        <div className="ml-20">
          <h2 className="font-bold text-3xl line-clamp-1 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, facilis.</h2>
          <p className="text-justify my-5 text-lg  ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi commodi quae autem blanditiis ea, ad facere et odio in quasi officia distinctio tempore ex eos. Nobis ex animi ipsam sequi.</p>
        <p className="text-2xl my-5">
          <span className="font-bold"> Facilities:</span>
          <span>Free wifi, Pet care, Swimming pool, Beaches, Resorts</span>
        </p>
       <div className="flex items-center">
       <button className="w-60 h-14 rounded-lg bg-orange-400 text-lg">Price : 5000</button>
       <Link href={"/hotels/2"} className="text-xl font-bold text-red-600 ml-10 ">See Details</Link>
       </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
