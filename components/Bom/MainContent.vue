<template>
  <main class="content flex-center background-image">
    <div class="w-3/4">
      <Card>
        <CardHeader>
          <CardTitle class="text-center" v-if="isBomOntmanteld === false"
            >Tijd voordat de bom ontploft!</CardTitle
          >
        </CardHeader>
        <CardContent>
          <div class="flex" v-if="!isBomOntmanteld">
            <BomTimerSection
              class="w-1/5"
              :numberToShow="timeRemaining?.days"
              textToShow="Dagen"
            />
            <BomTimerSection
              class="w-1/5"
              :numberToShow="timeRemaining?.hours"
              textToShow="Uren"
            />
            <BomTimerSection
              class="w-1/5"
              :numberToShow="timeRemaining?.minutes"
              textToShow="Minuten"
            />
            <BomTimerSection
              class="w-1/5"
              :numberToShow="timeRemaining?.seconds"
              textToShow="Seconden"
            />
            <BomTimerSection
              class="w-1/5"
              :numberToShow="timeRemaining?.milliseconds"
              textToShow="Milliseconden"
            />
          </div>
          <div
            v-if="isBomOntmanteld"
            class="text-green-500 text-3xl text-center"
          >
            Bom ontmanteld!
          </div>
          <div class="py-2" v-if="!isBomOntmanteld">
            <Input v-model="ontmantelCode" placeholder="Ontmantelcode" />
          </div>
          <div class="flex justify-center pt-2" v-if="!isBomOntmanteld">
            <Button :onclick="() => handleOntmantelClick()">Ontmantel</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </main>
</template>
<script setup lang="ts">
const juisteOntmantelCode =
  "321-BVCUIJK-5S-OAMBCPARB-PLVUMGD-534239:AFSTANDSBEDIENING";
const ontmantelCode = ref("");
const explodeTime = new Date(2024, 6, 12, 1, 0, 0, 0);
const isBomOntmanteld = ref(false);
let intervalId: NodeJS.Timeout;
const timeRemaining = ref<
  | {
      days: string;
      hours: string;
      minutes: string;
      seconds: string;
      milliseconds: string;
    }
  | undefined
>();

onMounted(async () => {
  const { isTicking } = await $fetch<{ isTicking: boolean }>(
    "/api/bom/isTicking"
  );
  if (isTicking) {
    intervalId = setInterval(() => {
      setDiff(explodeTime, new Date());
    }, 10);
  } else {
    isBomOntmanteld.value = true;
  }
});

function setDiff(t1: Date, t2: Date) {
  const diff = t1.getTime() - t2.getTime();
  const SEC = 1000,
    MIN = 60 * SEC,
    HRS = 60 * MIN,
    DAY = 24 * HRS;

  const days = Math.floor(diff / DAY).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
  });
  const hrs = Math.floor((diff % DAY) / HRS).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
  });
  const min = Math.floor((diff % HRS) / MIN).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
  });
  const sec = Math.floor((diff % MIN) / SEC).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
  });
  const ms = Math.floor(diff % SEC)
    .toLocaleString("en-US")
    .substring(0, 2);
  timeRemaining.value = {
    days: days,
    hours: hrs,
    minutes: min,
    seconds: sec,
    milliseconds: ms,
  };
  return `${days}:${hrs}:${min}:${sec}.${ms}`;
}

const handleOntmantelClick = async () => {
  console.log("test");
  console.log(ontmantelCode.value === juisteOntmantelCode);
  if (ontmantelCode.value === juisteOntmantelCode) {
    await $fetch("/api/bom/defuse", { method: "POST" });
    clearInterval(intervalId);
    isBomOntmanteld.value = true;
  }
};
</script>
<style>
.content {
  height: 93%;
  width: 100vw;
}
.background-image {
  background-image: url("../../assets/foto-zonder-watermerk.png");
  background-repeat: repeat-x;
}
</style>
