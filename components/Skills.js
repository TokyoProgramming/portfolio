import Batch from "./Batch";

export default function Skills() {
  return (
    <section className="flex-col p-5  rounded-xl mx-2 shadow-md">
      <div class="relative flex-col justify-center">
        <div className="md:hidden flex flex-wrap">
          <Batch
            src={"/images/batch/html5.svg"}
            height={30}
            width={90}
            alt={"html5"}
          />
          <Batch
            src="/images/batch/css3.svg"
            height={30}
            width={85}
            alt={"css3"}
          />
          <Batch
            src="/images/batch/javascript.svg"
            height={30}
            width={120}
            alt={"javascript"}
          />

          <Batch
            src="/images/batch/python.svg"
            height={30}
            width={100}
            alt={"python"}
          />
          <Batch src="/images/batch/r.svg" height={30} width={50} alt={""} />
          <Batch
            src="/images/batch/react.svg"
            height={30}
            width={85}
            alt={"react"}
          />
          <Batch
            src="/images/batch/next.svg"
            height={30}
            width={85}
            alt={"next"}
          />
          <Batch
            src="/images/batch/django.svg"
            height={30}
            width={85}
            alt={"djagon"}
          />
          <Batch
            src="/images/batch/drf.svg"
            height={30}
            width={130}
            alt={"drf"}
          />
        </div>

        <div className="hidden md:inline-flex flex flex-wrap">
          <Batch
            src={"/images/batch/html5.svg"}
            height={30}
            width={90}
            alt={"html5"}
          />
          <Batch
            src="/images/batch/css3.svg"
            height={30}
            width={85}
            alt={"css3"}
          />
          <Batch
            src="/images/batch/javascript.svg"
            height={30}
            width={120}
            alt={"javascript"}
          />
          <Batch
            src="/images/batch/node.svg"
            height={30}
            width={85}
            alt={"node"}
          />
          <Batch
            src="/images/batch/python.svg"
            height={30}
            width={100}
            alt={"python"}
          />
          <Batch src="/images/batch/r.svg" height={30} width={50} alt={""} />
          <Batch
            src="/images/batch/react.svg"
            height={30}
            width={85}
            alt={"react"}
          />
          <Batch
            src="/images/batch/next.svg"
            height={30}
            width={85}
            alt={"next"}
          />
          <Batch
            src="/images/batch/django.svg"
            height={30}
            width={85}
            alt={"djagon"}
          />
          <Batch
            src="/images/batch/drf.svg"
            height={30}
            width={130}
            alt={"drf"}
          />
          <Batch
            src="/images/batch/express.svg"
            height={30}
            width={110}
            alt={"express"}
          />
          <Batch
            src="/images/batch/bootstrap.svg"
            height={30}
            width={110}
            alt={"bootstrap"}
          />
          <Batch
            src="/images/batch/materialui.svg"
            height={30}
            width={100}
            alt={"djagon"}
          />
          <Batch
            src="/images/batch/postgres.svg"
            height={30}
            width={95}
            alt={"postgres"}
          />
          <Batch
            src="/images/batch/mongodb.svg"
            height={30}
            width={100}
            alt={"mongodb"}
          />
        </div>
      </div>
    </section>
  );
}
