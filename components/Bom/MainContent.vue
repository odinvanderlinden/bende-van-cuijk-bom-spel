<template>
  <main class="content flex-center background-image">
    <div class="w-3/4">
      <Card>
        <CardHeader>
          <CardTitle class="text-center"
            >Tijd voordat de bom ontploft!</CardTitle
          >
        </CardHeader>
        <CardContent>
          <div class="flex">
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
        </CardContent>
      </Card>
    </div>
  </main>
</template>
<script setup lang="ts">
const explodeTime = new Date(2024, 6, 10, 22, 0, 0, 0);
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
  setInterval(() => {
    setDiff(explodeTime, new Date());
  }, 10);
  const nuxt = useNuxtApp();
  await nuxt.$pwa?.install();
  console.log(nuxt.$pwa?.isPWAInstalled);
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
</script>
<style>
.content {
  height: 93%;
  width: 100vw;
}
.background-image {
  background-image: url("https://as2.ftcdn.net/v2/jpg/02/61/74/31/1000_F_261743126_xPq1Cvn5XbCSuLxZRS4zGdKucbXss7Uf.jpg");
  background-repeat: repeat-x;
}
</style>
