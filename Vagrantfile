
Vagrant.configure("2") do |config|
  config.vm.provider "virtualbox" do |vb|
    vb.customize ["modifyvm", :id, "--natnet1", "10.0.200/24"]
    vb.memory = 4096
  end
  config.ssh.shell = "bash"
  config.vm.provision "shell", path: "setup_8.x"
  config.vm.provision "shell", inline: "cp /vagrant/node-app.service /etc/systemd/system"
  config.vm.provision "shell", inline: "systemctl start node-app"
  config.vm.hostname = "node.internal"
  config.vm.network "forwarded_port", guest: 3000, host: 3000
  config.vm.box = "ubuntu/xenial64"

end
