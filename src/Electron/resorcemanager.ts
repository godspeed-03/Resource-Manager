import osUtils from "os-utils";
import fs from "fs";
import os from "os";

const INTERVAL = 500;

export function pollresources() {
  setInterval(async () => {
    const cpuuse = await getCPUUsage();
    const ramuse = getRamUsage();
    const storage = getMemStorage();
    console.log(cpuuse, ramuse, storage.usage);
  }, INTERVAL);
}

function getCPUUsage() {
  return new Promise((resolve) => {
    osUtils.cpuUsage(resolve);
  });
}

function getRamUsage() {
  return 1 - osUtils.freememPercentage();
}

function getMemStorage() {
  const stats = fs.statfsSync(process.platform == "win32" ? "C://" : "/");
  const total = stats.bsize * stats.blocks;
  const free = stats.bsize * stats.bfree;

  return {
    total: Math.floor(total / 1000000000),
    usage: 1 - free / total,
  };
}

export function getdevicedata() {
const totalStorage = getMemStorage();
const cpuModel = os.cpus()[0].model;
const totalMemory = Math.floor(osUtils.totalmem() / 1024)

return{
    totalStorage,
    totalMemory,
    cpuModel,
}
}